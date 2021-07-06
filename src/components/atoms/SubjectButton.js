import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    borderRadius: 0,
    backgroundColor:'white',
    borderColor:'#87ceeb',
    width: 500,
    height: 300
  },
});

export default function SubjectButton({name}){
  const classes = useStyles();

  return(
    <Button className={classes.root}
      variant="outlined"
    >
      <Typography variant="caption">{name}</Typography>
    </Button>
  )
}