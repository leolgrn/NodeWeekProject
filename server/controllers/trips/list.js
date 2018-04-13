module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (params, req, res, next) => {
      find()
        .then(trips => res.end(JSON.stringify(trips)))
        .catch(error => {
          res.statusCode = 500;
          res.end(JSON.stringify(error));
        });

      function find(){
        const trips = Trip.find().fetch();
        return new Promise((resolve, reject) => trips ? resolve(trips) : reject('trips not found'));
      }
    }
};
