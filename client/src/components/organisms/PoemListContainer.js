import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Row from '../molecules/Row';

const PoemListContainer = ({displayData}) => {

  return (
    <div>
      <div style={{paddingTop:15}}/>
      <TableContainer component={Paper}>
        <Table aria-label="Ranking table">
          <TableBody>
            {displayData.slice(0,5).map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
     
  )
}
export default PoemListContainer;