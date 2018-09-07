Promise = require('bluebird'); // eslint-disable-line no-global-assign

const { port, env } = require('./config/vars');
const app = require('./config/express');

app.listen(port, () => console.info(`server started on port ${port} (${env})`));

module.exports = app;
