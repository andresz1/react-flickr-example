const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const { logs } = require('./vars');
const routes = require('../api/routes');
const error = require('../api/middlewares/error');

const app = express();

app.use(morgan(logs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(helmet());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  });
}

app.use('/api/v1', routes);

app.use(error.converter);
app.use(error.handler);

module.exports = app;
