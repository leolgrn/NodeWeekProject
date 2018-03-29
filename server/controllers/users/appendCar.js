module.exports = Meteor => {
    const User = Meteor.models.User;

    return (car) => {
        return findOwner(car)
                .then(updateUser)
                .catch(err => err);

        function findOwner(car){
          const user = User.findOne(car.owner);
          return new Promise((resolve, reject) => user ? resolve(user) : reject('user not found'));
        }

        function updateUser(user){
          user.cars = user.cars.concat(car._id);
          return new Promise((resolve, reject) => {
            User.update(user._id, user, (err, userId) => err ? reject(err) : resolve(userId));
          });
        }
    }
};
