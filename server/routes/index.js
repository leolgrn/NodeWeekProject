module.exports = Meteor => {
    require('./users')(Meteor);
    require('./cars')(Meteor);
    require('./auth')(Meteor);
    require('./trips')(Meteor);
}
