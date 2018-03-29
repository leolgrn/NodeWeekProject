import { Picker } from 'meteor/meteorhacks:picker';
const POST = Picker.filter((req, res) => req.method === 'POST');

module.exports = Meteor => {

    Picker.middleware(Meteor.middlewares.bodyParser.json());

    POST.route('/login', Meteor.controllers.auth.login);

}
