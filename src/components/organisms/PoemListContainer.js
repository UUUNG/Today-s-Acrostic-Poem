import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PrimaryButton from '../atoms/PrimaryButton'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
const PoemListContainer = () => {

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
      <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'#f2f4f7',borderColor:'1px solid black'}}>
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
      </div>
    </div>

    
  )
}
export default PoemListContainer;