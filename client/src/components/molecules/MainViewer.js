import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import dayjs from 'dayjs';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

const MainViewer = ({main,idx}) => {
    const [open, setOpen] = React.useState("");
    const [openReply, setOpen_reply] = React.useState(false);
    const handleClick = (idx) => {
        if (open === idx) {
          setOpen("")
        }else{
          setOpen(idx)
        }
      };

    return (
        <React.Fragment>
            <TableRow key={idx} onClick={() => handleClick(idx)}>
            <TableCell component="th" scope="row">
                {main.word}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <div style={{display:'flex'}}>
                    <PersonIcon />
                    <Typography >{main.name}</Typography>
                </div>
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <div style={{display:'flex'}}>
                    <ThumbUpAltIcon />
                    <Typography>{main.likes}</Typography>
                </div>
            {/* <div>{dayjs(notice.date).format("YYYY년 MM월 DD일 HH:mm:ss")}</div> */}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <div style={{display:'flex'}}>
                    <CommentIcon />
                    <Typography>{main.comment}</Typography>
                </div>
            </TableCell>
            </TableRow>
            <Collapse in={idx===open} timeout="auto" unmountOnExit>
            <Box margin={3}>
                <Paper variant="outlined" square style={{padding:10}}>
                    <Typography variant="caption" gutterBottom component="div">
                        {main.word.split('')[0]}{main.poem_1}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {main.word.split('')[1]}{main.poem_2}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {main.word.split('')[2]}{main.poem_3}
                    </Typography>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Typography variant="caption" >공유하기</Typography>
                        <ShareIcon fontSize="small"/>
                    </div>
                </Paper>
                <Table size="small" aria-label="comments">
                    <TableBody>
                    {main.replyList && main.replyList.map((historyRow, idx) => (
                        <div style={{padding: 10}}>
                        <div style={{display:'flex'}}>
                            <Typography style={{fontSize: 12, marginRight: 10}}>{historyRow.name}</Typography>
                            <Typography style={{fontSize: 12, color:'#888'}}>{dayjs(historyRow.created).format("MM.DD HH:mm")}</Typography>
                        </div>
                        <Typography style={{fontSize: 14}}>{historyRow.reply}</Typography>
                        </div>
                    ))}
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
                    </TableBody>
                </Table>
            </Box>
            </Collapse>
        </React.Fragment>

  )
}
export default MainViewer;