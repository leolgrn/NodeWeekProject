module.exports = Meteor => {
    const Car = Meteor.models.Car;

    return (params, req, res, next) => {
        const data = req.body;
        data.owner = req.user;

        return create(data)
            .then(appendCarToOwner)
            .then(car => {
              res.statusCode = 201;
              res.end(JSON.stringify(car));
            })
            .catch(err => {
              res.statusCode = err.code || 500;
              res.end(JSON.stringify(err.message) || JSON.stringify(err));
            });

        function appendCarToOwner(carId) {
            const car = Car.findOne(carId);
            return Meteor.controllers.users
                .appendCar(car)
                .then(() => car)
        }

        function create(data){
          return new Promise((resolve, reject) => {
            Car.insert(data, (err, id) => {
              return err ? reject(err) : resolve(id);
            });
          })
        }
    }
};
