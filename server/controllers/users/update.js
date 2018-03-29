module.exports = Meteor => {
    const User = Meteor.models.User;

    return (params, req, res, next) => {
      const id = params.id;

      update(id)
        .then(userId => res.end(JSON.stringify(userId)))
        .catch(err => {
          res.statusCode = 500;
          res.end(JSON.stringify(err));
        });

      function update(id){
        return new Promise((resolve, reject) => {
          User.update(id, req.body, (err, userId) => err ? reject(err) : resolve(userId));
        });
      }

    }
};
