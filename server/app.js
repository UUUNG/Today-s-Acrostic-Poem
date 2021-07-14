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

//데이터의 Insert나 Update 시에는 query가 아닌 execute를 사용
app.get('/NoticePage', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM notice;')
    console.log(result[0])
    res.json({ code: 200, result: "success", data : result[0] });
  }
  catch(e) {
    res.json({ code: 500, result: "error", message: e.message });
  }
});
//path 는 영어만 인식합니다. RANKINGPAGEMONTHREPLY
app.get('/RankingPageMonthREPLY/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const sql=`
      SELECT 
        REPLY.name as reply_name, 
        REPLY.reply as reply_re , 
        REPLY.likes as reply_likes
      FROM REPLY 
      LEFT JOIN POEM 
      ON REPLY.poemID = POEM.poemID 
      WHERE REPLY.poemId = ?
    `
    const result = await pool.query(sql, [
      id
    ])
    //sql injection 공격을 막기 위함
    res.json({ code: 200, result: "success", data : result[0] });
  }
  catch(e) {
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.get('/RankingWeekly', async (req, res, next) => {
  try {
    const sqlPoem = `
      SELECT * 
      FROM POEM 
      WHERE YEARWEEK(created) = YEARWEEK(now())
      ORDER BY likes desc
    `
    const resultPoem = await pool.query(sqlPoem);
    
    let poems = resultPoem[0];
    let idx = 0;

    for(const poem of resultPoem[0]){
      const sqlReply = `
        SELECT * 
        FROM REPLY
        WHERE REPLY.poemId = ?
      `

      const resultReply = await pool.query(sqlReply, [
        poem.poemId
      ])
      
      poems[idx]["replyList"] = resultReply[0]

      idx += 1;
    }

    console.log(poems)

    res.json({ code: 200, result: "success", data : poems });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.get('/RankingMonthly', async (req, res, next) => {
  try {
    const sqlPoem = `
      SELECT * 
      FROM POEM 
      WHERE DATE_FORMAT(created, '%m')=MONTH(current_date())
      ORDER BY likes desc
    `
    const resultPoem = await pool.query(sqlPoem);
    
    let poems = resultPoem[0];
    let idx = 0;

    for(const poem of resultPoem[0]){
      const sqlReply = `
        SELECT * 
        FROM REPLY
        WHERE REPLY.poemId = ?
      `

      const resultReply = await pool.query(sqlReply, [
        poem.poemId
      ])
      
      poems[idx]["replyList"] = resultReply[0]

      idx += 1;
    }

    console.log(poems)

    res.json({ code: 200, result: "success", data : poems });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.get('/RankingYearly', async (req, res, next) => {
  try {
    const sqlPoem = `
      SELECT * 
      FROM POEM 
      WHERE DATE_FORMAT(created, '%Y')=YEAR(current_date()) 
      ORDER BY likes desc
    `
    const resultPoem = await pool.query(sqlPoem);
    
    let poems = resultPoem[0];
    let idx = 0;

    for(const poem of resultPoem[0]){
      const sqlReply = `
        SELECT * 
        FROM REPLY
        WHERE REPLY.poemId = ?
      `

      const resultReply = await pool.query(sqlReply, [
        poem.poemId
      ])
      
      poems[idx]["replyList"] = resultReply[0]

      idx += 1;
    }

    console.log(poems)

    res.json({ code: 200, result: "success", data : poems });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.get('/HOFPage', async (req, res, next) => {
  try {
    const sqlHof = `
      SELECT * 
      FROM hof
    `
    const resultHof = await pool.query(sqlHof);
    
    let hofs = resultHof[0];
    let idx = 0;

    console.log(hofs)

    res.json({ code: 200, result: "success", data : hofs });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
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
