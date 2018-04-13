const jwt = require('jsonwebtoken');
const sha1 = require('sha1');

module.exports = Meteor => {
    const Token = Meteor.models.Token;
    const User = Meteor.models.User;

    return (params, req, res, next) => {

        find()
            .then(ensureLimitNotExceeded)
            .then(create)
            .then(encrypt)
            .then(encryptedToken => res.end(JSON.stringify(encryptedToken)))
            .catch(error => {
              res.statusCode = 500 || error;
              res.end(JSON.stringify(error.message || error));
            });

        function find() {
          let user = User.findOne({
              username: req.body.username,
              password: sha1(req.body.password)
          });
          return new Promise((resolve, reject) => {
            user ? resolve(user) : reject({ code: 404, message: 'user not found' });
          });
        }

        function ensureLimitNotExceeded(user) {
             let tokens = Token.find({ user_id: user._id }, {sort: {date: 1}}).fetch();
             return new Promise((resolve, reject) => {
                if (tokens.length < Meteor.settings.simultaneousLoginLimit) return resolve(user);
                return Token.remove(tokens[0]._id, (err, data) => err ? reject({ code: 500, message: err }) : resolve(user));
             })
        }

        function create(user) {
            let date = Date.now();
            return Token.insert({ user_id: user._id, date: date })
        }

        function encrypt(token) {
            return new Promise((resolve, reject) => {
                jwt.sign(token, Meteor.settings.secret, (err, encryptedToken) => err ? reject(err) : resolve(encryptedToken));
            })
        }
    }
};
