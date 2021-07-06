import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CommentIcon from '@material-ui/icons/Comment';
import GridHead from '../molecules/GridHead';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
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
      { name: '피구피규', comment: 'ㅋㅋㅋㅋㅋ아 개웃기네' },
      { name: '뇽뇽냥냥', comment: '이게 왜 랭킹? ㄵ' },
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
                        {historyRow.name}
                      </TableCell>
                      <TableCell>{historyRow.comment}</TableCell>
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
        name: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const weeklyRows = [
  createData('바나나','피구피규',37,10),
  createData('김다은','이부', 33,12),
  createData('최재웅','숨겨진트롤',23,3),
  createData('한승우','피융신',17,5),
];

const monthlyRows = [
  createData('복숭아','피구피규',37,10),
  createData('김다은','이부', 33,12),
  createData('최재웅','숨겨진트롤',23,3),
  createData('한승우','피융신',17,5),
];

const yearlyRows = [
  createData('파인애플','피구피규',37,10),
  createData('김다은','이부', 33,12),
  createData('최재웅','숨겨진트롤',23,3),
  createData('한승우','피융신',17,5),
];

const useStyles = makeStyles((theme) => ({

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  
}));

const RankingContainer = () => {
  const classes = useStyles();
  const [sorting, setSorting] = React.useState('주간');
  const [rankData, setRankData]=React.useState(weeklyRows);
  
  const handleSortingClick = (category) => {
    setSorting(category);
  };

  const CheckedButton = ({check}) => {
    if(check === '주간'){
      setRankData(weeklyRows)
    }
    else if(check === '월간'){
      setRankData(monthlyRows)
    }
    else if(check === '연간'){
      setRankData(yearlyRows)
    }
  
    return(
      <>
        <CheckIcon/>
        <div style={{fontWeight:'bolder'}}>{check}</div>
      </>)
  }

  return (
    <div>
      <div className={classes.heroContent}>
        <GridHead name="주간/월간/연간랭킹" description="주간/월간/연간별 랭킹을 보여줍니다."/>
      </div>

      <Box flexDirection="row" style={{display: 'inline-flex'}}>
        <Button onClick={() => handleSortingClick('주간')}>
          {sorting=== '주간' ? <CheckedButton check={'주간'}/> : '주간' } 
        </Button>
        <Button onClick={() => handleSortingClick('월간')}>
          {sorting=== '월간' ? <CheckedButton check={'월간'}/> : '월간' } 
        </Button>
        <Button onClick={() => handleSortingClick('연간')}>
          {sorting=== '연간' ? <CheckedButton check={'연간'}/> : '연간' }
        </Button> 
      </Box>
      <div style={{paddingTop:15}}/>
      <TableContainer component={Paper}>
        <Table aria-label="Ranking table">
          <TableBody>
            {rankData.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default RankingContainer;