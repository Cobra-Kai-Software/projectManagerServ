const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const cors = require('cors')

const bodyParser = require('body-parser');

const projects = require('./routes/projects');
const tasks = require('./routes/tasks');
const login = require('./routes/auth')


const app = express();

const port = process.env.PORT || 8080;



app.use(cors())

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', login);
app.use('/tasks', tasks);
app.use('/', projects);



app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(port)

module.exports = app;
