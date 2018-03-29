import { Picker } from 'meteor/meteorhacks:picker';
const carUrl = new RegExp('^\/cars');
const GET = Picker.filter((req, res) => req.method === 'GET' && req.url.match(carUrl));
const POST = Picker.filter((req, res) => req.method === 'POST' && req.url.match(carUrl));
const PUT = Picker.filter((req, res) => req.method === 'PUT' && req.url.match(carUrl));
const DELETE = Picker.filter((req, res) => req.method === 'DELETE' && req.url.match(carUrl));

module.exports = Meteor => {

    Picker.middleware(Meteor.middlewares.bodyParser.json());
    Picker.middleware(Meteor.middlewares.setHeader);

    GET.route('/cars', Meteor.controllers.cars.list);

    GET.route('/cars/:id', Meteor.controllers.cars.show);

    POST.route('/cars', Meteor.controllers.cars.create)
        .middleware(Meteor.middlewares.ensureAuthenticated);

    PUT.route('/cars/:id', Meteor.controllers.cars.update);

    DELETE.route('/cars/:id', Meteor.controllers.cars.remove);

}
