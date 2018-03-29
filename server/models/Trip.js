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
    }
    // participants: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }],
    // driver: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    // car: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Car'
    // }
});

module.exports = Trip;
