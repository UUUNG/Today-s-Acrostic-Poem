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

const router = express.Router();

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/MainLike', async (req, res, next) => {
  try {
    const sqlPoem = `
      SELECT * 
      FROM POEM 
      WHERE DATE_FORMAT(created, "%Y-%m-%d")=current_date()
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

app.get('/MainLatest', async (req, res, next) => {
  try {
    const sqlPoem = `
      SELECT *
      FROM POEM 
      WHERE DATE_FORMAT(created, "%Y-%m-%d")=current_date()
      ORDER BY created desc
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
    res.json({ code: 200, result: "success", data : poems });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

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

      const resultReply2 = await pool.query(sqlReply, [
        poem.poemId
      ])
      
      poems[idx]["replyList"] = resultReply2[0]

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

      const resultReply3 = await pool.query(sqlReply, [
        poem.poemId
      ])
      
      poems[idx]["replyList"] = resultReply3[0]

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

      const resultReply4 = await pool.query(sqlReply, [
        poem.poemId
      ])
      
      poems[idx]["replyList"] = resultReply4[0]

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

app.get('/getPOEMId', async (req, res, next) => {
  try {
    /* POEM 테이블 행의 개수 = 새로 등록될 poem id로 계산 */
    const sql_poemId = `
      SELECT COUNT(*) 
      FROM project1.POEM;
    ` 
    const result_poemId = await pool.query(sql_poemId);
    
   /*  let hofs = resultHof[0];
        let idx = 0;
    */
    console.log(result_poemId)

    res.json({ code: 200, result: "success", data : result_poemId });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.post('/postAcrostic', async (req, res, next) => {
   
  let {id, pwd, word, poem_1, poem_2, poem_3, poemId}=req.body;
  
  try {

    const sql_poemId = `
      SELECT COUNT(poemId) FROM project1.REPLY WHERE REPLY.poemId = ?
    `
    const post_comment = await pool.query(sql_poemId, [poemId])
    const count_comment = parseInt(Object.values(post_comment[0][0]))
    console.log("count_comment: ", count_comment);

    const sql=`INSERT INTO project1.POEM 
    SET name=?, password=?, word=?, poem_1=?, poem_2=?,poem_3=?, likes=0, comment=?;
    `
    
    const post = await pool.query(sql, [
      id, pwd, word, poem_1, poem_2, poem_3, count_comment
    ])
    
    console.log(post)

    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});
app.post('/postReply', async (req, res, next) => {
  
  let {poemId, id, pwd, reply}=req.body;
  try {
    const sql=`INSERT INTO project1.REPLY 
    SET poemId=?, name=?, password=?, reply=?;
    `
    const post = await pool.query(sql, [
      poemId, id, pwd, reply
    ])
    console.log(post)

    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.post('/deletePoem', async (req, res, next) => {

  let {id, name, pwd}=req.body;
  try {

    
    //댓글도 삭제
    const rpySql = `DELETE FROM REPLY WHERE poemId=?;`

    const rpyPost = await pool.query(rpySql, [id]);

    //시 삭제
    const sql=`DELETE FROM POEM 
      WHERE poemId = ? AND name=? AND password=?;
    `
    const post = await pool.query(sql, [
      id, name, pwd
    ])

    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.post('/deleteReply', async (req, res, next) => {

  let {id, rpyId, name, pwd}=req.body;
  try {
    const sql=`DELETE FROM REPLY 
      WHERE replyId = ? AND name=? AND password=?;
    `
    console.log("댓글 삭제할거");
    const post = await pool.query(sql, [
      rpyId, name, pwd
    ])

    //댓글 수 감소
    const sqlCount=`
    UPDATE POEM SET
      comment = ? WHERE poemId = ? AND name=? AND password=?;
    `

    const commentCount=`SELECT comment FROM POEM WHERE name=? AND password=?;`
    const postCount = await pool.query(commentCount, [
      id, name, pwd
    ])

    const postComment = await pool.query(sqlCount, [
      postCount[0]-1, name, pwd
    ])

    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.post('/postLike', async (req, res, next) => {
  
  let {likes, poemId}=req.body;
  try {
    const sql=`UPDATE project1.POEM 
    SET likes=? WHERE poemId = ?;
    `
    const post = await pool.query(sql, [
      likes, poemId
    ])
    console.log(post)

    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.post('/Report', async (req, res, next) => {
  
  let {replyId, poemId, reason} = req.body;
  try {
    const sql=`INSERT INTO project1.manage 
    SET replyId=?, poemId=?, reason=?;
    `
    const post = await pool.query(sql, [
      replyId, poemId, reason
    ])
    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
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
