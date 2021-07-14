import React,{useEffect} from 'react';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import Row from '../molecules/Row';
import CheckIcon from '@material-ui/icons/Check';

const PoemListContainer = () => {

  const [sorting, setSorting] = React.useState('실시간 좋아요순');
  const [displayData, setDisplayData]=React.useState([]);
  const [likeList, setLikeList] = React.useState([]);
  const [latestList, setLatestList] = React.useState([]);

  const callLikeApi = async()=>{
    const response = await fetch('/MainLike');
    const body = await response.json();
    return body;
  }

  const callLatestApi = async()=>{
    const response = await fetch('/MainLatest');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{

    callLikeApi()
    .then(res=>{
      console.log(res)
      setLikeList(res.data)
    })
    .catch(err=>console.log(err));

    callLatestApi()
    .then(res=>{
      console.log(res)
      setLatestList(res.data)
    })
    .catch(err=>console.log(err));

  }, []);

  const handleSortingClick = (category) => {
    setSorting(category);
  };

  const CheckedButton = ({check}) => {
    if(check === '실시간 좋아요순'&&likeList){
      setDisplayData(likeList)
    }
    else if(check === '최신순'&&latestList){
      setDisplayData(latestList)
    }
  
    return(
      <>
        <CheckIcon/>
        <div style={{fontWeight:'bolder'}}>{check}</div>
      </>)
  }

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{display:'flex'}}>
          <Button onClick={() => handleSortingClick('실시간 좋아요순')} style={{borderRight:'1px solid #EEE'}}>
            {sorting=== '실시간 좋아요순' ? <CheckedButton check={'실시간 좋아요순'}/> : '실시간 좋아요순' } 
          </Button>
          <Button onClick={() => handleSortingClick('최신순')}>
            {sorting=== '최신순' ? <CheckedButton check={'최신순'}/> : '최신순' } 
          </Button>
        </div>
        <Button >
         {'더보기 +'}
        </Button>    
      </div>


      <div style={{paddingTop:15}}/>
      <TableContainer component={Paper}>
        <Table aria-label="Ranking table">
          <TableBody>
            {displayData.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
     
  )
}
export default PoemListContainer;