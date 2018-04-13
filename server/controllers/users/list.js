module.exports = Meteor => {
    const User = Meteor.models.User;

    return (params, req, res, next) => {
        find()
          .then(user => res.end(JSON.stringify(user)))
          .catch(error => {
            res.statusCode = 500;
            res.end(JSON.stringify(error));
          });

        function find(){
          const users = User.find().fetch();
          return new Promise((resolve, reject) => users ? resolve(users) : reject('users not found'));
        }
    }
};
