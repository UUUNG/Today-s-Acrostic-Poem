import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PrimaryButton from '../atoms/PrimaryButton'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CommentIcon from '@material-ui/icons/Comment';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(keyword, name, like,comment) {
  return {
    keyword,
    name,
    like,
    comment,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} onClick={() => setOpen(!open)}>
        <TableCell component="th" scope="row">
           {row.keyword}
        </TableCell>
        <TableCell align="right">
          <PersonIcon />
          {row.name}
        </TableCell>
        <TableCell align="right">
          <ThumbUpAltIcon />
          {row.like}
        </TableCell>
        <TableCell align="right">
          <CommentIcon/>
          {row.comment}</TableCell>
      </TableRow>


      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="caption" gutterBottom component="div">
                바나나 나랑 나눠먹자
              </Typography>
              <Table size="small" aria-label="comments">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
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

/**type체킹 부분. */
Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    comment: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('바나나','피구피규',37,10),
  createData('김다은','이부', 33,12),
  createData('최재웅','숨겨진트롤',23,3),
  createData('한승우','피융신',17,5),
];

const RankingContainer = () => {

  /**주간월간연간 랭킹 */
  return (
    <div>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        주간/월간/연간 랭킹
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        주간/월간/연간
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="Ranking table">
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default RankingContainer;