module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (params, req, res, next) => {
        find()
            .then(ensureRoomAvailable)
            .then(join)
            .then(data => res.end(JSON.stringify(data)))
            .catch(err => {
              res.statusCode = (err.code || 500);
              res.end(JSON.stringify(err.message || err));
            });

        function ensureRoomAvailable(trip) {
          const driver = 1;
          const roomAvailable = trip.car.seats - trip.participants.length - driver;
          if (roomAvailable <= 0)
              return Promise.reject({code: 422, message: 'no room available'});
          return trip;
        }

        function join(trip) {
            trip.participants = trip.participants.concat(req.user);
            return new Promise((resolve, reject) => {
              Trip.update(trip._id, trip, (err, data) => err ? reject(err) : resolve(data));
            });
        }

        function find(){
          return new Promise((resolve, reject) => {
              const trip = Trip.findOne({
                  _id: params.id,
                  status: Trip.Statuses.NotStarted
              });
              trip ? resolve(trip) : reject({code: 404, message: 'trip not found'});
          });
        }
    }
};
