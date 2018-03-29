const sha1 = require('sha1');

module.exports = Meteor => {
    const User = Meteor.models.User;

    return (params, req, res, next) => {
        const data = req.body;
        data.password = sha1(req.body.password);
        data.cars = [];

        create(data)
          .then(userId => res.end(JSON.stringify(userId)))
          .catch(err => {
            res.statusCode = 500;
            res.end(JSON.stringify(err));
          })

        function create(data){
          return new Promise((resolve, reject) => {
            User.insert(data, (err, id) => {
              return err ? reject(err) : resolve(id);
            });
          })
        }
    }
};
