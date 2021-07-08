import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PrimaryButton from '../atoms/PrimaryButton'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      //width: '25ch',
    },
  },
})); 

function PoemPostContainer() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: '#cfe8fc'}}>
      <form className={classes.root}  noValidate autoComplete="off">
        <TextField id="outlined-basic" label="닉네임" variant="outlined" size="small"/>
        <TextField id="outlined-basic" label="비밀번호" variant="outlined" size="small"/>
        <div style={{ margin:10,display:'flex', flexDirection:'column'}}>
          <TextField required id="standard-required"  defaultValue="바" />
          <TextField required id="standard-required"  defaultValue="나" />
          <TextField required id="standard-required"  defaultValue="나" />
        </div>
      </form>
      <div style={{display:'flex',justifyContent:'flex-end'}}>
        <PrimaryButton name={"등록"}/>
      </div>
    </div>
  )
}
export default PoemPostContainer;