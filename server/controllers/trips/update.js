module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (req, res, next) => {
        Trip.findOneAndUpdate({ _id: req.params.id, driver: req.user }, req.body)
            .then(trip => res.send(trip))
            .catch(error => res.status(500).send(error))
    }
};
