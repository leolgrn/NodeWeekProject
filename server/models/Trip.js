const Trip = new Mongo.Collection('trip');

Trip.schema = new SimpleSchema({
    start: {
        type: String
    },
    end: {
        type: String
    },
    status: {
        type: Number,
        defaultValue: 0
    },
    participants: {
        type: [String]
    },
    driver: {
        type: String
    },
    car: {
        type: String
    }
});

Trip.Statuses = {
    NotStarted: 0,
    Started: 1,
    Finished: 2
};

module.exports = Trip;
