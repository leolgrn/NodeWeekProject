module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (criteria) => {
        criteria.status = Trip.Statuses.Finished;
        return Trip
            .remove(criteria)
    }
};
