module.exports = Meteor => {
    return {
        show: require('./show')(Meteor),
        list: require('./list')(Meteor),
        create: require('./create')(Meteor),
        update: require('./update')(Meteor),
        remove: require('./remove')(Meteor),
        get: require('./get')(Meteor)
    };
};
