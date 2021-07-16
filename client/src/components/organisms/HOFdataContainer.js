import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Row from '../molecules/Row'


const HOFdataContainer = () => {
  const [rankData, setRankData] = React.useState([]);

  const callWeeklyApi = async()=>{
    const response = await fetch('/RankingWeekly');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{
      callWeeklyApi()
      .then(res=>{
        setRankData(res.data)
      })
      .catch(err=>console.log(err));
  }, []);

  return (
    <div>
      {rankData && <div> 
      <TableContainer component={Paper}>
        <Table aria-label="Ranking table">
          <TableBody>
            {rankData.map((row, idx) => (
              <Row key={idx} row={row} onReply={false} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      }
    </div>
  )
}
export default HOFdataContainer;