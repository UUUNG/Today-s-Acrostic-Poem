import React from 'react';
import HeadContainer from '../components/organisms/HeadContainer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import RankingContainer from '../components/organisms/RankingContainer'
const RankingPage = () => {

  return (
    <div>
      <HeadContainer/>
      <Container maxWidth="sm">
      <RankingContainer/>
      </Container>
    </div>

  )
}
export default RankingPage;