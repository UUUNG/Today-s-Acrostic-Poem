import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function GridButtons(){

  return(
    <Grid container spacing={2} justify="center">
    <Grid item>
        <Button variant="contained" color="primary">
        Main call to action
        </Button>
    </Grid>
    <Grid item>
        <Button variant="outlined" color="primary">
        Secondary action
        </Button>
    </Grid>
    </Grid>
  )
}