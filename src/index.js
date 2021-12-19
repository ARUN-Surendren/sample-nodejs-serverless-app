const lambda = require('lambda-api');
const api = lambda({
    version: 'v1.0',
    base: '/api/'
});

// Define a route
api.get('/status', async(req, res) => {
    return res.status(200).send({ status: 'ok' });
});

exports.handler = async(event, context) => {
    // Run the request
    return await api.run(event, context);
};
// End of file