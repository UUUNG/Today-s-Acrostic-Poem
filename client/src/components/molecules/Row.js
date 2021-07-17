import React ,{useEffect}from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import axios from 'axios';
import dayjs from 'dayjs';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForm from './DeleteForm'
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  FacebookIcon,
  InstapaperIcon,
  TwitterIcon,
} from "react-share";

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  
function Row({ row, onReply = true, onLike = true}) {
    let on = onReply;
    let onLikes = onLike;
    const [open, setOpen] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const classes = useRowStyles();
    const [openReply, setOpen_reply] = React.useState(false);
    const [values, setValues] = React.useState({ poemId:"", id: "", password: "", reply:"" });

    const [setlike]  = React.useState({ likes: row.likes, id: row.poemId });

    const  handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value,poemId:row.poemId });
    } 

    const handleSubmit= (e) => {
      if(values.id==""||values.password==""||values.reply==""){
        if(values.reply==""){
          alert("댓글을 입력해주세요!");
        }
        else{
          alert('모두 입력해주세요!');
        }
        e.preventDefault();
  
      }else{
        alert('댓글이 등록되었습니다!');
        axios.post('/postReply',{poemId:values.poemId,id:values.id, pwd:values.password, reply: values.reply}) 
        .then(function (response) { console.log(response); }) 
        .catch(error => { console.log('error : ',error.response) });
  
      }
    } 
  
  const likeSubmit = (e) => {
    axios.post('/postLike',{likes : parseInt(row.likes) + 1, poemId: row.poemId}) 
    .then(function (response) { console.log(response); }) 
    .catch(error => { console.log('error : ',error.response) });
  }

    return (
      <React.Fragment>
          <Paper variant="outlined" square style={{display:'flex', flexDirection:'column',flexGrow:5,flexBasis:0}}>
          <TableRow className={classes.root} onClick={() => setOpen(!open)}>
            <div style={{display:'flex', flexGrow:5,flexBasis:0}}>
              <Typography style={{flexGrow:2,flexBasis:0}}>{row.word}</Typography>
              <Typography style={{fontSize: 12, color:'#888'}}>{dayjs(row.created).format("MM.DD HH:mm")}</Typography>
              <div style={{display:'flex',flexGrow:1,flexBasis:0}}>
                <PersonIcon />
                <Typography >{row.name}</Typography>
              </div>
              <div style={{display:'flex',flexGrow:1,flexBasis:0}}>
                <ThumbUpAltIcon />
                <Typography>{row.likes}</Typography>
              </div>
              <div style={{display:'flex',flexGrow:1,flexBasis:0}}>
                <CommentIcon />
                <Typography>{row.comment}</Typography>
              </div>
            </div>
          </TableRow>
    
          <TableRow>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={3}>
                <Paper variant="outlined" square style={{padding:10}}>
                  <Typography variant="caption" gutterBottom component="div">
                    {row.word.split('')[0]}{row.poem_1}
                  </Typography>
                  <Typography variant="caption" gutterBottom component="div">
                    {row.word.split('')[1]}{row.poem_2}
                  </Typography>
                  <Typography variant="caption" gutterBottom component="div">
                    {row.word.split('')[2]}{row.poem_3}
                  </Typography>
                  <div style={{display:'flex',justifyContent:'center'}}>
                    <Typography variant="caption" gutterBottom component="div">공유하기</Typography>
                      {/* 공유하기 버튼 들 */}
                    <FacebookShareButton url={"https://localhost:3000"} title={"facebook"}>
                      <FacebookIcon size={26} round={true}/>
                    </FacebookShareButton>
                    <TwitterShareButton url={"https://localhost:3000"} title={"facebook"}>
                      <TwitterIcon size={26} round={true}/>
                    </TwitterShareButton>
                    <InstapaperShareButton url={"https://localhost:3000"} title={"facebook"}>
                      <InstapaperIcon size={26} round={true}/>
                    </InstapaperShareButton>

                    <IconButton aria-label="delete" className={classes.margin} onClick={() => setOpenDelete(!openDelete)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>

                    <Collapse in={openDelete} timeout="auto" unmountOnExit>
                      <DeleteForm row={row}/>
                    </Collapse>

                    
                    
                  </div>
                  {Boolean(onLikes) && <div>
                    <form onSubmit ={likeSubmit} className={classes.root}  noValidate autoComplete="off">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type="submit"
                        startIcon={<ThumbUpAltIcon />}
                      >
                        Like
                      </Button>
                    </form>
                    </div>}
                 
                </Paper>
    
                <Table size="small" aria-label="comments">
                  <TableBody>
                    {row.replyList && row.replyList.map((historyRow, idx) => (
                      <div style={{padding: 10}}>
                        <div style={{display:'flex'}}>
                          <Typography style={{fontSize: 12, marginRight: 10}}>{historyRow.name}</Typography>
                          <Typography style={{fontSize: 12, color:'#888'}}>{dayjs(historyRow.created).format("MM.DD HH:mm")}</Typography>
                        </div>
                        <Typography style={{fontSize: 14}}>{historyRow.reply}</Typography>
                      </div>
                    ))}
                    {Boolean(on) && <div>
                      <div style={{display:'flex',flexGrow:1,flexBasis:0}}>
                        <Button onClick={() => setOpen_reply(!openReply)}>
                          댓글쓰기
                        </Button>
                      </div>
                        <Collapse in={openReply} timeout="auto" unmountOnExit>
                        <form onSubmit ={handleSubmit} className={classes.root}  noValidate autoComplete="off">
                        <div style={{ margin:5,display:'flex', flexDirection:'row'}}>
                          <TextField id="outlined-basic" label="닉네임" name="id" variant="outlined" size="small" value={values.id} onChange={handleChange}/>
                          <TextField id="outlined-basic" label="비밀번호" name="password" variant="outlined" size="small" value={values.password} onChange={handleChange}  />
                          <TextField id="outlined-basic" label="내용" name="reply" variant="outlined" size="small" value={values.reply} onChange={handleChange}  />
                          <button type="submit" >
                            등록
                          </button>
                        </div>
                        </form>
                        </Collapse>
                      </div>
                    }
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableRow>
        </Paper>
      </React.Fragment>
    );
  }

  export default Row;