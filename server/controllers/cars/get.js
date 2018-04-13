module.exports = Meteor => {
    const Car = Meteor.models.Car;

    return (criteria) => {
      const car = Car.findOne(criteria);
      return new Promise((resolve, reject) => car ? resolve(car) : reject('car not found'));
    }
};
