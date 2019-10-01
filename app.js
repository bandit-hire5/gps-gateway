const Gateway = require('micromq/gateway');

require('dotenv').config();

const app = new Gateway({
    microservices: ['users'],
    rabbit: {
        url: process.env.RABBIT_URL,
    },
});

app.post(['/signup'], async (req, res) => {
    await res.delegate('users');
});

app.listen(process.env.GATEWAY_PORT);