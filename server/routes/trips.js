import { Picker } from 'meteor/meteorhacks:picker';
const GET = Picker.filter((req, res) => req.method === 'GET');
const POST = Picker.filter((req, res) => req.method === 'POST');
const PUT = Picker.filter((req, res) => req.method === 'PUT');
const DELETE = Picker.filter((req, res) => req.method === 'DELETE');

module.exports = Meteor => {

    GET.route('/trips', Meteor.controllers.trips.list);

    POST.route('/trips', Meteor.controllers.trips.create);

    PUT.route('/trips/:id', Meteor.controllers.trips.update);

    DELETE.route('/trips/:id', Meteor.controllers.trips.remove);

}
