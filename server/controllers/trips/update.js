module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (params, req, res, next) => {
        const id = params.id;

        update(id)
          .then(tripId => res.end(JSON.stringify(tripId)))
          .catch(err => {
            res.statusCode = 500;
            res.end(JSON.stringify(err));
          });

        function update(id){
          return new Promise((resolve, reject) => {
            Trip.update(id, req.body, (err, tripId) => err ? reject(err) : resolve(tripId));
          });
        }
    }
};
