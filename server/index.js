'use strict';

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = express();
const data = require('./taylor_swift_discography.json');

app.use(logger('combined'), cors());

app.get('/api', (req, res) => {
  res.json(data);
});

app.listen(8000, () => {
  console.log('server started on port 8000');
})
