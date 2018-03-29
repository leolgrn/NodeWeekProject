module.exports = Meteor => {
    return {
        show: require('./show')(Meteor),
        list: require('./list')(Meteor),
        create: require('./create')(Meteor),
        update: require('./update')(Meteor),
        remove: require('./remove')(Meteor),
        join: require('./join')(Meteor),
        start: require('./start')(Meteor),
        finish: require('./finish')(Meteor),
        clean: require('./clean')(Meteor)
    };
};
