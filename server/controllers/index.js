module.exports = Meteor => {
    Meteor.controllers = {
        users: require('./users')(Meteor),
        cars: require('./cars')(Meteor),
        auth: require('./auth')(Meteor),
        trips: require('./trips')(Meteor)
    }
};
