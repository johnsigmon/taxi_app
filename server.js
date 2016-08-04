'use strict'
const express         = require('express');
const path            = require('path');
const logger          = require('morgan');
const bodyParser      = require('body-parser');

const methodOverride  = require('method-override');

const homeRoute       = require('./controllers/homeRouter');



const app             = express();
const port            = process.env.PORT || 3000;





app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));
app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')));

app.use('/', homeRoute);

app.listen(port, function() {
  console.log('Server is listening on ',port);
})
