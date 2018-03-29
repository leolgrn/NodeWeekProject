module.exports = Meteor => {
    const Car = Meteor.models.Car;

    return (params, req, res, next) => {
          find()
            .then(cars => res.end(JSON.stringify(cars)))
            .catch(error => {
              res.statusCode = 500;
              res.end(error);
            });

          function find(){
            const cars = Car.find().fetch();
            return new Promise((resolve, reject) => cars ? resolve(cars) : reject('cars not found'));
          }
    }
};
