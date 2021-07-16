import React from 'react';
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
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import dayjs from 'dayjs';

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  
function Row({ row, onReply = true }) {
    let on = onReply;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    const [openReply, setOpen_reply] = React.useState(false);

    return (
      <React.Fragment>
        <Paper variant="outlined" square style={{display:'flex', flexDirection:'column',flexGrow:5,flexBasis:0}}>
        <TableRow className={classes.root} onClick={() => setOpen(!open)}>
          <div style={{display:'flex', flexGrow:5,flexBasis:0}}>
            <Typography style={{flexGrow:2,flexBasis:0}}>{row.word}</Typography>
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
                  {row.poem_1}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                  {row.poem_2}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                  {row.poem_3}
                </Typography>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <Typography variant="caption" >공유하기</Typography>
                  <ShareIcon fontSize="small"/>
                </div>
                
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
                        <div style={{ margin:5,display:'flex', flexDirection:'row'}}>
                          <TextField required id="standard-required"  defaultValue="닉네임"/>
                          <TextField required id="standard-required"  defaultValue="비밀번호" />
                          <TextField required id="standard-required"  defaultValue="내용" />
                        </div>
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