module.exports = Meteor => {
    return (req, res, next) => {
        const encryptedToken = req.headers['authorization'];
        Meteor.controllers.auth
            .decryptToken(encryptedToken)
            .then(user => req.user = user)
            .then(() => next())
            .catch(() => {
              res.statusCode = 401;
              res.end(JSON.stringify('unauthorized'));
            })
    }
};
