module.exports = Meteor => {
    const Car = Meteor.models.Car;

    return (params, req, res, next) => {
        remove()
            .then(pullFromOwner)
            //.then(removeNotStartedTrips)
            .then(() => {
              res.statusCode = 204;
              res.end();
            })
            .catch(error => {
              res.statusCode = 500;
              res.end(JSON.stringify(error))
            });

        function pullFromOwner(car) {
            return Meteor.controllers.users
                .pullCar(car)
        }

        // function removeNotStartedTrips() {
        //     return Meteor.controllers.trips
        //         .clean({car: req.params.id })
        // }

        function remove(){
          return new Promise((resolve, reject) => {
            const car = Car.findOne(params.id);
            Car.remove(params.id, (err, data) => err ? reject(err) : resolve(car));
          })
        }
    }
}
