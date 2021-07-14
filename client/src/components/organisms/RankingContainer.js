import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import GridHead from '../molecules/GridHead';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import Row from '../molecules/Row'
import dayjs from 'dayjs'

function createData(word, name, likes,comment) {
  return {
    word,
    name,
    likes,
    comment,
    history: [
      { name: '피구피규', comment: 'ㅋㅋㅋㅋㅋ아 개웃기네zzzzzzzzzzzzzz' },
      { name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },
    ],
  };
}

/**type체킹 부분. */
Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
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
  {'word':'바나나','name':'피구피규','likes':37,'comment':10, 'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'김다은','name':'이부','likes':33,'comment':12,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'최재웅','name':'숨겨진트롤','likes':23,'comment':3,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'한승우','name':'피피융신','likes':17,'comment':5,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
];

const monthlyRows = [
  createData('복숭아','피구피규',37,10),
  createData('김다은','이부', 33,12),
  createData('최재웅','숨겨진트롤',23,3),
  createData('한승우','피융신',17,5),
];

const yearlyRows = [
  {'word':'복숭아','name':'피구피규','likes':37,'comment':10, 'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'김다은','name':'이부','likes':33,'comment':12,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'최재웅','name':'숨겨진트롤','likes':23,'comment':3,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'한승우','name':'피피융신','likes':17,'comment':5,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
];

const useStyles = makeStyles((theme) => ({

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  
}));

const RankingContainer = () => {
  const classes = useStyles();
  const [sorting, setSorting] = React.useState('주간');
  const [rankData, setRankData] = React.useState([]);
  const [Weeklylist, setWeeklyList] = React.useState([]);
  const [monthlylist, setMonthlyList] = React.useState([]);
  const [yearlylist, setYearlyList] = React.useState([]);

  const callWeeklyApi = async()=>{
    const response = await fetch('/RankingWeekly');
    const body = await response.json();
    return body;
  }

  const callMonthlyApi = async()=>{
    const response = await fetch('/RankingMonthly');
    const body = await response.json();
    return body;
  }

  const callYearlyApi = async()=>{
    const response = await fetch('/RankingYearly');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{

      callWeeklyApi()
      .then(res=>{
        console.log(res)
        setWeeklyList(res.data)
      })
      .catch(err=>console.log(err));

      callMonthlyApi()
      .then(res=>{
        console.log(res)
        setMonthlyList(res.data)
      })
      .catch(err=>console.log(err));

      callYearlyApi()
      .then(res=>{
        console.log(res)
        setYearlyList(res.data)
      })
      .catch(err=>console.log(err));

      setRankData(Weeklylist);
  }, []);

  const handleSortingClick = (category) => {
    setSorting(category);
  };

  const CheckedButton = ({check}) => {
    if(check === '주간'&& Weeklylist!=null){
      setRankData(Weeklylist)
    }
    else if(check === '월간'&& monthlylist!=null){
      setRankData(monthlylist)
    }
    else if(check === '연간'&& yearlylist!=null){
      setRankData(yearlylist)
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
      {monthlylist.length > 0 && <div>{dayjs(monthlylist[0].created).format("YYYY년 MM월 DD일 HH:mm:ss")}</div>}
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
            {rankData.map((row, idx) => (
              <Row key={idx} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default RankingContainer;