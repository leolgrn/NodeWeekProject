import { Picker } from 'meteor/meteorhacks:picker';
const GET = Picker.filter((req, res) => req.method === 'GET');
const POST = Picker.filter((req, res) => req.method === 'POST');
const PUT = Picker.filter((req, res) => req.method === 'PUT');
const DELETE = Picker.filter((req, res) => req.method === 'DELETE');

module.exports = () => {

    GET
        .route('/cars', (params, req, res, next) => {
            const method = req.method;
            res.end(method);
        });

    POST
        .route('/cars', (params, req, res, next) => {
            const method = req.method;
            res.end(method);
        });

    PUT
        .route('/cars/:id', (params, req, res, next) => {
            const method = req.method;
            res.end(method);
        });

    DELETE
        .route('/cars/:id', (params, req, res, next) => {
            const method = req.method;
            res.end(method);
        });

}
