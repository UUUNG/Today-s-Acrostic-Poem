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
  
function ReplyRow(replyDatas) {
    /* 로우가 안 들어오는 문제 */
    const replyData = replyDatas;    
    console.log("replyData :", replyData['replyData']);
    return (
        <div>
            {replyData ? replyData['replyData'].map((reple_row) => (
                <div>
                    {reple_row ? 
                    <div>
                    <Typography variant="caption" style={{flexGrow:2,flexBasis:0}}>{reple_row['name']}</Typography>
                    <Typography variant="caption" style={{flexGrow:3,flexBasis:0}}>{reple_row['reply']}</Typography>
                    </div>
                    : <></>}
                </div>
                )) : <></>
            }
        </div>
    );
  }

  export default ReplyRow;
  