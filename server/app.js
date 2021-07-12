const fs = require('fs');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cors = require("cors")

var mysql = require('mysql');

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

//const data = fs.readFileSync("./lib/pool.js");
//var conf = JSON.parse(data);
//var mysql = require('mysql');

//pool.connect();

//pool.connection.connet();
const router = express.Router();

app.use('/', indexRouter);
app.use('/users', usersRouter);

/*
app.get('/', (req, res, next) => {
  //var connect;
  pool.getConnection()
  .then((connect) => {
    return connect.query('SELECT * FROM notice');
  }).then((r) => { 
    res.json(r); 
  }).catch((e) => {
    res.json(e);
  });
});
*/

app.get('/NoticePage', async (req, res, next) => {
  try {
    const connect = await pool.getConnection();
    const row = await connect.query('SELECT * FROM notice;');
    connect.release();
    res.json(row);
  }
  catch(e) {
    res.json(e);
  }
});

/*
app.get('/NoticePage', (req, res) => { //클라이언트가 해당 경로에 접속하게 될 때 
  pool.promise().query("SELECT * FROM notice")
  .then( ([rows, fields]) => { 
    res.send(rows); 
  })
});
*/

//    const [rows, fields] = await pool.query("SELECT * FROM notice");


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
