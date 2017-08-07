const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const cors = require('cors')

const bodyParser = require('body-parser');

const projects = require('./routes/projects');
const tasks = require('./routes/tasks');
const login = require('./routes/auth')
// make route for members

const app = express();

const port = process.env.PORT || 8080;

// view engine setup


app.use(cors())
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', login);
app.use('/tasks', tasks);
app.use('/', projects);


catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port)

module.exports = app;
