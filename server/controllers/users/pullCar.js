module.exports = Meteor => {
    const User = Meteor.models.User;

    return (car) => {
        return User.update(car.owner, {
            $pull: {
                cars: car._id
            }
        })
    }
}
