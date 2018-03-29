module.exports = Meteor => {
    const User = Meteor.models.User;

    return (params, req, res, next) => {
        const id = params.id;

        remove(id)
          .then(userId => res.end(JSON.stringify(userId)))
          .catch(err => {
            res.statusCode = 500;
            res.end(JSON.stringify(err));
          });

        function remove(id){

          return new Promise((resolve, reject) => {
            User.remove(id, (err, data) => err ? reject(err) : resolve(data));
          })
        }
    }
};
