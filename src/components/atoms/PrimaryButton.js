import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    display:'inline-block', 
    paddingLeft: 3, 
    paddingRight: 3, 
    paddingTop: 0, 
    paddingBottom: 0, 
    borderRadius: 0,
    backgroundColor:'white',
    borderColor:'#87ceeb'
  },
});

export default function PrimaryButton({name}){
  const classes = useStyles();

  return(
    <Button className={classes.root}
      variant="outlined"
    >
      <Typography variant="caption">{name}</Typography>
    </Button>
  )
}