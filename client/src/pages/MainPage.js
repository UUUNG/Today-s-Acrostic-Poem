import React from 'react';
import KeywordContainer from '../components/organisms/KeywordContainer';
import PoemListContainer from '../components/organisms/PoemListContainer';
import Container from '@material-ui/core/Container';

const MainPage = () => {

  return (
    <div>
      <Container maxWidth="sm">
        <KeywordContainer/>
        <div style={{paddingTop:15}}/>
        <PoemListContainer/>
      </Container>
    </div>

  )
}
export default MainPage;