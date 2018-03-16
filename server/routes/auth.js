import { Picker } from 'meteor/meteorhacks:picker';
const GET = Picker.filter((req, res) => req.method === 'GET');

module.exports = () => {

    GET
        .route('/login', (params, req, res, next) => {
            const method = req.method;
            res.end(method);
        });

}
