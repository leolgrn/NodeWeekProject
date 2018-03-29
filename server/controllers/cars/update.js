module.exports = Meteor => {
    const Car = Meteor.models.Car;

    return (params, req, res, next) => {
        const id = params.id;

        update(id)
          .then(carId => res.end(JSON.stringify(carId)))
          .catch(err => {
            res.statusCode = 500;
            res.end(JSON.stringify(err));
          });

        function update(id){
          return new Promise((resolve, reject) => {
            Car.update(id, req.body, (err, userId) => err ? reject(err) : resolve(userId));
          });
      }
    }
};
