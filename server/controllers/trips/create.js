module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (params, req, res, next) => {
        const data = req.body;
        data.driver = req.user;
        data.participants = [];

        ensureCarExists()
            .then(create)
            .then(tripId => {
              res.statusCode = 201;
              res.end(JSON.stringify(tripId));
            })
            .catch(err => {
              res.statusCode = err.code || 500;
              res.end(JSON.stringify(err.message || err));
            });

        function ensureCarExists() {
            return Meteor.controllers.cars
                .get({_id: data.car, owner: data.driver})
        }

        function create() {
          return new Promise((resolve, reject) => {
            Trip.insert(data, (err, tripId) => err ? reject(err) : resolve(tripId));
          });
        }
    }
};
