module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (params, req, res, next) => {
      const id = params.id;

        find(id)
          .then(trip => res.end(JSON.stringify(trip)))
          .catch(error => {
            res.statusCode = 500;
            res.end(JSON.stringify(error));
          });

        function find(id){
          const trip = Trip.findOne(id);
          return new Promise((resolve, reject) => trip ? resolve(trip) : reject('trip not found'));
        }
    }
};
