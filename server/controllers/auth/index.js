module.exports = Meteor => {
    return {
        login: require('./login')(Meteor),
        decryptToken: require('./decryptToken')(Meteor)
    };
};
