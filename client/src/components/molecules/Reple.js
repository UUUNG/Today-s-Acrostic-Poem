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

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  
function Reple(reple_rows) {
    /* 로우가 안 들어오는 문제 */
    const rowreple_row = reple_rows['reple_rows'];
    const [openReply, setOpen_reply] = React.useState(false);

    console.log("reple_rows :", {rowreple_row});
    
    return (
      <Table size="small" aria-label="comments">
        <TableBody>
          <div>
            {console.log("rowreple_row in Reple.js:", {rowreple_row})}
          </div>
          
          <div style={{display:'flex', flexGrow:5,flexBasis:0 , minWidth:'parent'}}>
            <Typography variant="caption" style={{flexGrow:2,flexBasis:0}}>{rowreple_row['name']}</Typography>
            <Typography variant="caption" style={{flexGrow:3,flexBasis:0}}>{rowreple_row['reply']}</Typography>
          </div>
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
    );
  }

  export default Reple;
  