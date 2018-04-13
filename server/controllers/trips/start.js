module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (params, req, res, next) => {
        find()
            .then(start)
            .then(tripId => res.end(JSON.stringify(tripId)))
            .catch(err => {
              res.statusCode = (err.code || 500);
              res.end(JSON.stringify(err.message || err));
            });

        function start(trip) {
            trip.status = Trip.Statuses.Started;
            return new Promise((resolve, reject) => {
              Trip.update(trip._id, trip, (err, data) => err ? reject(err) : resolve(trip._id));
            });
        }

        function find(){
          return new Promise((resolve, reject) => {
              const trip = Trip.findOne({
                _id: params.id,
                driver: req.user,
                status: Trip.Statuses.NotStarted
              });
              trip ? resolve(trip) : reject({code: 404, message: 'trip not found'});
          });
        }
    }
}
