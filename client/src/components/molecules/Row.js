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
import Reple from './Reple';

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  
function Row(rows) {
    const { row } = rows;
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
                  바나나 나랑 나눠먹자
                </Typography>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <Typography variant="caption" >공유하기</Typography>
                  <ShareIcon fontSize="small"/>
                  96
                </div>
                
              </Paper>
  
              {/* <Reple rows={row}></Reple> */}
            </Box>
          </Collapse>
        </TableRow>
        </Paper>
      </React.Fragment>
    );
  }

  export default Row;
  