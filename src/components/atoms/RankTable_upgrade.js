import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, likes, comments) {
  return {
    name,
    likes,
    comments,
    history: [
      { word: '바', content: '바나나'},
      { word: '나', content: '나랑'},
      { word: '나', content: '나눠먹장 ><'},
    ],
    comment_history: [
        { comment: 'ㅋㅋㅋㅋㅋㅋㅋ와 정말 잘썼네요', comment_name: '피구'},
        { comment: '아ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ개웃기네 진짜', comment_name: '길동'},
        { comment: '명예의 전당으로 꺼져라ㅋㅋㅋㅋㅋㅋㅋㅋㅋ', comment_name: '영심'},
      ],
  };
}

function Row(props) {
  const { row } = props;
  const [open_content, setOpen_content] = React.useState(false);
  const [open_comment, setOpen] = React.useState(false);

  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        {/* 여기서부터 버튼을 만드려는 시도임 */}
        <Button onClick={() => setOpen_content(!open_content)}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen_content(!open_content)}>
              {open_content ? <KeyboardArrowUpIcon />: <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.likes}</TableCell>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open_comment)}>
              {open_comment ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell> {row.comments}</TableCell>
        </Button>
      </TableRow>
       {/* open content(삼행시 나오는 )영역 */} 
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open_content} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                바나나
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.word}>
                      <TableCell component="th" scope="row">
                        {historyRow.word}
                      </TableCell>
                      <TableCell>{historyRow.content}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
     {/* open comment(댓글 나오는)영역 */} 
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open_comment} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Comments
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.comment_history.map((CommentHistoryRow) => (
                    <TableRow key={CommentHistoryRow.comment}>
                      <TableCell component="th" scope="row">
                        {CommentHistoryRow.comment}
                      </TableCell>
                      <TableCell>{CommentHistoryRow.comment_name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        word: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('김대은', 159, 24),
  createData('김민직', 237, 37),
  createData('최재웅', 262, 24),
  createData('한승우', 305, 67),
  createData('조세형', 356, 49),
];

export default function RankTable_upgrade() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>NickName</TableCell>
            <TableCell align="right">Likes</TableCell>
            <TableCell align="right">Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
