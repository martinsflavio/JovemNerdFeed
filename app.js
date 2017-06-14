'use strict';

const express       = require('express'),
      path          = require('path'),
      favicon       = require('serve-favicon'),
      logger        = require('morgan'),
      cookieParser  = require('cookie-parser'),
      bodyParser    = require('body-parser'),
      override      = require('method-override'),
      expressHbs    = require('express-handlebars');



// connect to mongo_db
const db = require('./db/mongo');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(override("_method"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// import routes
app.use('/', require('./routes/index'));
app.use('/articles', require('./routes/articles'));
app.use('/notes', require('./routes/notes'));

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
