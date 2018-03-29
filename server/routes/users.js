import { Picker } from 'meteor/meteorhacks:picker';
const userUrl = new RegExp('^\/users');
const GET = Picker.filter((req, res) => req.method === 'GET' && req.url.match(userUrl));
const POST = Picker.filter((req, res) => req.method === 'POST' && req.url.match(userUrl));
const PUT = Picker.filter((req, res) => req.method === 'PUT' && req.url.match(userUrl));
const DELETE = Picker.filter((req, res) => req.method === 'DELETE' && req.url.match(userUrl));

module.exports = Meteor => {

    Picker.middleware(Meteor.middlewares.bodyParser.json());
    Picker.middleware(Meteor.middlewares.setHeader);

    GET.route('/users/:id', Meteor.controllers.users.show);

    GET.route('/users', Meteor.controllers.users.list);

    POST.route('/users', Meteor.controllers.users.create);

    PUT.route('/users/:id', Meteor.controllers.users.update);

    DELETE.route('/users/:id', Meteor.controllers.users.remove);

}
