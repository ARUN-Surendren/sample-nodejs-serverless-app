const { handler } = require('../src/index.js');
test('Testing status', async() => {
    const values = {
        version: '2.0',
        rawPath: '/api/status',
        queryStringParameters: null,
        requestContext: {
            http: {
                method: 'GET',
                path: '/api/status',
            },
            body: null,
        }
    };
    await handler(values, 'testing')
        .then(res => {
            expect(res.statusCode).toBe(200);
            expect(JSON.parse(res.body).status).toBe("ok");
        })
        .catch(err => expect(err).toBeFalsy());
});