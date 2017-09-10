const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb:27017/APIAuthentication');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/users', require('./routes/users'));

// start the server
const port = 3000;
app.listen(port);
console.log(`server listening at ${port}`);