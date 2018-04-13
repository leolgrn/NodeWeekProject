const User = new Mongo.Collection('user');

User.schema = new SimpleSchema({
    username: {
        type: String
        // unique: true
    },
    password: {
        type: String
        // select: false
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number,
        optional: true
    },
    cars: {
        type: [Object]
    }
});

module.exports = User;
