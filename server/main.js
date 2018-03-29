import { Meteor } from 'meteor/meteor';

require('./settings')(Meteor);      // Loading settings
require('./models')(Meteor);        // Loading models
require('./middlewares')(Meteor);   // Loading middlewares
require('./controllers')(Meteor);   // Loading controllers
require('./routes')(Meteor);        // Loading routes

Meteor.startup(() => {

});
