import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import GridHead from '../molecules/GridHead';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import Row from '../molecules/Row'

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

        setWeeklyList(res.data)
      })
      .catch(err=>console.log(err));

      callMonthlyApi()
      .then(res=>{
        setMonthlyList(res.data)
      })
      .catch(err=>console.log(err));

      callYearlyApi()
      .then(res=>{
        setYearlyList(res.data)
      })
      .catch(err=>console.log(err));

      setRankData(Weeklylist);
  }, []);

  const handleSortingClick = (category) => {
    setSorting(category);
  };

  const CheckedButton = ({check}) => {
    if(check === '주간'&& Weeklylist){
      setRankData(Weeklylist)
    }
    else if(check === '월간'&& monthlylist){
      setRankData(monthlylist)
    }
    else if(check === '연간'&& yearlylist){
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
            {rankData.slice(0,10).map((row, idx) => (
              <Row key={idx} row={row}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default RankingContainer;