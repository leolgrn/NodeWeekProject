module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (criteria) => {
        criteria.status = Trip.Statuses.NotStarted;
        return Trip
            .remove(criteria)
    }
};
