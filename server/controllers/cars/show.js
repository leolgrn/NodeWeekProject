module.exports = Meteor => {
    const Car = Meteor.models.Car;

    return (params, req, res, next) => {
      find()
        .then(car => res.end(JSON.stringify(car)))
        .catch(err => {
          res.statusCode = 500;
          res.end(JSON.stringify(err));
      });

      function find(){
        return new Promise((resolve, reject) => {
          const car = Car.findOne(params.id);
          return car ? resolve(car) : reject('car not found');
        })
      }
    }
};
