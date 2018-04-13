import { Picker } from 'meteor/meteorhacks:picker';
const tripUrl = new RegExp('^\/trip');
const GET = Picker.filter((req, res) => req.method === 'GET' && req.url.match(tripUrl));
const POST = Picker.filter((req, res) => req.method === 'POST' && req.url.match(tripUrl));
const PUT = Picker.filter((req, res) => req.method === 'PUT' && req.url.match(tripUrl));
const DELETE = Picker.filter((req, res) => req.method === 'DELETE' && req.url.match(tripUrl));

module.exports = Meteor => {

    Picker.middleware(Meteor.middlewares.bodyParser.json());
    Picker.middleware(Meteor.middlewares.setHeader);

    GET.route('/trips', Meteor.controllers.trips.list);

    GET.route('/trips/:id', Meteor.controllers.trips.show);

    POST.route('/trips', Meteor.controllers.trips.create)
        .middleware(Meteor.middlewares.ensureAuthenticated);

    POST.route('/trips/:id/join', Meteor.controllers.trips.join)
        .middleware(Meteor.middlewares.ensureAuthenticated);

    POST.route('/trips/:id/start', Meteor.controllers.trips.start)
        .middleware(Meteor.middlewares.ensureAuthenticated);

    POST.route('/trips/:id/finish', Meteor.controllers.trips.finish)
        .middleware(Meteor.middlewares.ensureAuthenticated);

    PUT.route('/trips/:id', Meteor.controllers.trips.update)
       .middleware(Meteor.middlewares.ensureAuthenticated);

    DELETE.route('/trips/:id', Meteor.controllers.trips.remove)
          .middleware(Meteor.middlewares.ensureAuthenticated);

}
