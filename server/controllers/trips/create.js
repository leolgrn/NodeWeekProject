module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (req, res, next) => {
        const data = req.body;
        data.driver = req.user;

        ensureCarExists()
            .then(create)
            .then(trip => res.status(201).send(trip))
            .catch(err => res.status(err.code || 500).send(err.message || err));

        function ensureCarExists() {
            return Meteor.controllers.cars
                .get({_id: data.car, owner: data.driver})
        }

        function create() {

            return Trip.create(data);
        }
    }
};
