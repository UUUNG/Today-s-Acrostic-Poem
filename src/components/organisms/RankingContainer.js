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
import ShareIcon from '@material-ui/icons/Share';

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
      { name: '피구피규', comment: 'ㅋㅋㅋㅋㅋ아 개웃기네zzzzzzzzzzzzzz' },
      { name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },
    ],
  };
}

function Row(rows) {
  const { row } = rows;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <Paper variant="outlined" square style={{display:'flex', flexDirection:'column',flexGrow:5,flexBasis:0}}>
      <TableRow className={classes.root} onClick={() => setOpen(!open)}>
        <div style={{display:'flex', flexGrow:5,flexBasis:0}}>
          <Typography style={{flexGrow:2,flexBasis:0}}>{row.keyword}</Typography>
          <div style={{display:'flex',flexGrow:1,flexBasis:0}}>
            <PersonIcon />
            <Typography >{row.name}</Typography>
          </div>
          <div style={{display:'flex',flexGrow:1,flexBasis:0}}>
            <ThumbUpAltIcon />
            <Typography>{row.like}</Typography>
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
              </div>
              
            </Paper>

            <Table size="small" aria-label="comments">
              <TableBody>
                {row.history.map((historyRow) => (
                  <div style={{display:'flex', flexGrow:5,flexBasis:0 , minWidth:'parent'}}>
                    <Typography variant="caption" style={{flexGrow:2,flexBasis:0}}>{historyRow.name}</Typography>
                    <Typography variant="caption" style={{flexGrow:3,flexBasis:0}}>{historyRow.comment}</Typography>
                  </div>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableRow>
      </Paper>
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