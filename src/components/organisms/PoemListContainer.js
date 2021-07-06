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

const PoemListContainer = () => {


  const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });

  
  //const { row } = props;
  const [open_content, setOpen_content] = React.useState(false);
  const [open_comment, setOpen] = React.useState(false);

  const classes = useRowStyles();

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{display:'flex'}}>
          <Button style={{borderRight:'1px solid #EEE'}}>
            <Typography variant="caption">실시간 좋아요순</Typography>
          </Button>
          <Button>
            <Typography variant="caption">최신순</Typography>
          </Button>
        </div>
        <Button>
          <Typography variant="caption">더보기 + </Typography>
        </Button>    
      </div>


    

      <Button style={{display:'flex',justifyContent:'space-between',backgroundColor:'#f2f4f7',borderColor:'1px solid black'}} 
                onClick={() => setOpen_content(!open_content)}>
                  <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open_content} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                바나나
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  댓글 ~
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
                  댓글 ~
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
        <div style={{display:'flex'}}>
          <div style={{display:'flex', minWidth: '100px'}}>
            <PersonIcon />
            <Typography variant="caption"style={{textAlign:'center'}}>피구피규</Typography>
          </div>
          <Typography variant="caption" style={{textAlign:'center'}}>바나나 나랑 나눠먹을랭?</Typography>
        </div>
        <div style={{display:'flex'}}>
          <ThumbUpAltIcon />
          <Typography variant="caption" style={{textAlign:'center'}}>13</Typography>
        </div>
      </Button>
    </div>

    
  )
}
export default PoemListContainer;