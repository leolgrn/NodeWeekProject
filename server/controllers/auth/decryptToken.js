const jwt = require('jsonwebtoken');

module.exports = Meteor => {
    const Token = Meteor.models.Token;

    return (encryptedToken) => {
        if (!encryptedToken)
            return Promise.reject({ code: 401, message: 'unauthorized' });

        return decrypt()
            .then(ensureExists);

        function decrypt() {
            return new Promise((resolve, reject) => {
                jwt.verify(encryptedToken, Meteor.settings.secret, (err, decryptedToken) => err ? reject(err) : resolve(decryptedToken))
            });
        }

        function ensureExists(decryptedToken) {
            let token = Token.findOne(decryptedToken)
            return token ? token.user_id : Promise.reject(new Error('not Found'));
        }
    }
};
