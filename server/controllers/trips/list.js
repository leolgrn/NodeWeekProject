module.exports = Meteor => {
    const Trip = Meteor.models.Trip;

    return (params, req, res, next) => {
      //TODO: create a middleware for res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Type', 'application/json');
      try {
        const trips = Trip.find().fetch();
        return res.end(JSON.stringify(trips));
      } catch (e) {
        return new Error();
      }
    }
};
