import React from 'react';
import Container from '@material-ui/core/Container';
import RankingContainer from '../components/organisms/RankingContainer'
const RankingPage = () => {

  return (
    <div>
      <Container maxWidth="sm">
        <RankingContainer/>
      </Container>
    </div>

  )
}
export default RankingPage;