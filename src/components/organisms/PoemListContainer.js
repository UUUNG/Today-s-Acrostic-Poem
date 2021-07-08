import React from 'react';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import Row from '../molecules/Row';
import CheckIcon from '@material-ui/icons/Check';


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

const likeRows = [
  createData('바나나','피구피규',37,10),
  createData('바나나','이부', 33,12),
  createData('바나나','숨겨진트롤',23,3),
  createData('바나나','피융신',17,5),
];

const recentRows = [
  createData('복숭아','피구피규',37,10),
  createData('김다은','이부', 33,12),
  createData('최재웅','숨겨진트롤',23,3),
  createData('한승우','피융신',17,5),
];

const moreRows = [
  createData('파인애플','피구피규',37,10),
  createData('김다은','이부', 33,12),
  createData('최재웅','숨겨진트롤',23,3),
  createData('한승우','피융신',17,5),
];


const PoemListContainer = () => {

  const [sorting, setSorting] = React.useState('실시간 좋아요순');
  const [displayData, setDisplayData]=React.useState(likeRows);
  
  const handleSortingClick = (category) => {
    setSorting(category);
  };

  const CheckedButton = ({check}) => {
    if(check === '실시간 좋아요순'){
      setDisplayData(likeRows)
    }
    else if(check === '최신순'){
      setDisplayData(recentRows)
    }
    else if(check === '더보기 +'){
      setDisplayData(moreRows)
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
        <Button onClick={() => handleSortingClick('더보기 +')}>
         {sorting=== '더보기 +' ? <CheckedButton check={'더보기 +'}/> : '더보기 +' } 
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