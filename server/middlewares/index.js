module.exports = Meteor => {
    //require('./logger')(Meteor);

    Meteor.middlewares = {
        bodyParser: require('body-parser'),
        ensureAuthenticated: require('./ensureAuthenticated')(Meteor),
        setHeader: require('./setHeader')(Meteor)
    }
};
