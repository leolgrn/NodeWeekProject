module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (req, res, next) => {
        Trip.findById(req.params.id)
            .then(trip => res.send(trip))
            .catch(error => res.status(500).send(error))
    }
};
