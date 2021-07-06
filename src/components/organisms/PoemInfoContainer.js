import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PrimaryButton from '../atoms/PrimaryButton'
import { InfoRounded } from '@material-ui/icons';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Collapse from '@material-ui/core/Collapse';
import TableRow from '@material-ui/core/TableRow';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import Box from '@material-ui/core/Box';



const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      //width: '25ch',
    },
  },
})); 

function createData(keyword, name, like,comment) {
    return {
      keyword,
      name,
      like,
      comment,
      history: [
        { name: '피구피규', comment: 'ㅋㅋㅋㅋㅋ아 개웃기네' },
        { name: '뇽뇽냥냥', comment: '이게 왜 랭킹? ㄵ' },
      ],
    };
  }

function PoemInfoContainer() {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} onClick={() => setOpen(!open)}>
        <TableCell component="th" scope="row">
           작성자: 
        </TableCell>
        <TableCell align="right">
          <PersonIcon />
          피구피규
        </TableCell>
        <TableCell align="right">
          <ThumbUpAltIcon />
          3
        </TableCell>
        <TableCell align="right">
          <CommentIcon/>
          호로로로롤
          </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>

              <Table size="small" aria-label="comments">
                <TableHead>댓글</TableHead>
                <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">1</TableCell>
                      <TableCell>1234</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default PoemInfoContainer;