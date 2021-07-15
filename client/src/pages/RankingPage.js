import React from 'react';
import Container from '@material-ui/core/Container';
import RankingContainer from '../components/organisms/RankingContainer';
import GridHead from '../components/molecules/GridHead';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  
}));

const RankingPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
      <div className={classes.heroContent}>
          <GridHead name="주간/월간/연간랭킹" description="주간/월간/연간별 랭킹을 보여줍니다."/>
        </div>
        <RankingContainer/>
      </Container>
    </div>

  )
}
export default RankingPage;