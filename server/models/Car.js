const Car = new Mongo.Collection('car');

Car.schema = new SimpleSchema({
    model: {
        type: String,
        defaultValue: 'Lambda'
    },
    color: {
        type: String,
        defaultValue: 'White'
    },
    seats: {
        type: Number,
        defaultValue: 2
    },
    owner: {
        type: String
    }
});

module.exports = Car;
