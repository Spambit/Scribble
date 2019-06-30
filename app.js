var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var cookieRouter = require('./routes/cookie');
var fetchRouter = require('./routes/fetch');
var xhrRouter = require('./routes/xhr');
var uploadRouter = require('./routes/upload');
var downloadRouter = require('./routes/download');

var app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.text());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'node_modules','jquery','dist')));
app.use(express.static(path.join(__dirname,'node_modules','bootstrap','dist')));
app.use(express.static(path.join(__dirname,'node_modules','popper.js','dist','esm')));

app.use('/', indexRouter);
app.use('/upload', uploadRouter);
app.use('/download', downloadRouter);
app.use('/cookie', cookieRouter);
app.use('/fetch', fetchRouter);
app.use('/xhr', xhrRouter);

//cors
app.use(function (req, res, next) {
  if (res) {
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'PUT, DELETE, PATCH');
  }
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
