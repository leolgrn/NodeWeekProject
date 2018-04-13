module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (params, req, res, next) => {
        find()
            .then(ensureNotStarted)
            .then(remove)
            .then(() => {
              res.statusCode = 204;
              res.end();
            })
            .catch(error => {
              res.statusCode = 500;
              res.end(JSON.stringify(error))
            });

        function find(){
          return new Promise((resolve, reject) => {
            const trip = Trip.findOne(params.id);
            console.log(params.id);
            trip ? resolve(trip) : reject('trip not found');
          })
        }

        function ensureNotStarted(trip) {
            if (trip.status === Trip.Statuses.NotStarted)
                return true;
            return Promise.reject({code: 422, message: 'unprocessable trip'})
        }

        function remove() {
          return new Promise((resolve, reject) => {
            Trip.remove(params.id, err => err ? reject(err) : resolve());
          });
        }
    }
};
