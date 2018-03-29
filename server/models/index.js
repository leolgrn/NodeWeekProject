module.exports = Meteor => {
    // 1. connect to the database
    //mongoose.connect(server.settings.db_uri);

    // 2. attach models to the server
    Meteor.models = {
        Car: require('./Car'),
        User: require('./User'),
        Token: require('./Token'),
        Trip: require('./Trip')
    }
};
