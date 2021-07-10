var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cors = require("cors")

var pool = require("./lib/pool")

console.log(pool)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


///////////////////////////////////////
app.get('/NoticePage', (req, res) => { //클라이언트가 해당 경로에 접속하게 될 때 
  res.send([
    {'title':'공지ss사항2', 'writer':'운영자','date':20200203},
    {'title':'공지ss사항1', 'writer':'운영자','date':20200205},
    {'title':'공지ss사항3', 'writer':'운영자','date':20200201},
    {'title':'공지ss사항4', 'writer':'운영자','date':20200130},
    {'title':'공지ss사항5', 'writer':'운영자','date':20200125},
    {'title':'공지ss사항6', 'writer':'운영자','date':20200120},
    {'title':'공지ss사항7', 'writer':'운영자','date':20200110},
    {'title':'공지ss사항8', 'writer':'운영자','date':20200101},
    {'title':'공지ss사항9', 'writer':'운영자','date':20210302},
    {'title':'공지ss사항10', 'writer':'운영자','date':20210505},
    {'title':'공지ss사항11', 'writer':'운영자','date':20210809}
  ]);
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
