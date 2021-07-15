import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridHead from '../molecules/GridHead';
import PaginationTable from '../molecules/PaginationTable'
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme)=>({

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function AllPoemList({displayData}) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.heroContent}>
        <GridHead name="실시간 3행시" description=" "/>
      </div>
      <Container maxWidth="sm">
        <PaginationTable data={displayData} name={"main"}/>
      </Container>
      
    </div>
  );
}