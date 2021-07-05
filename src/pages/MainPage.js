import React from 'react';
import HeadContainer from '../components/organisms/HeadContainer';
import KeywordContainer from '../components/organisms/KeywordContainer';
import PoemPostContainer from '../components/organisms/PoemPostContainer';
import PoemListContainer from '../components/organisms/PoemListContainer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const MainPage = () => {

  return (
    <div>
      <HeadContainer/>
      <Container maxWidth="sm">
        <KeywordContainer/>
        <PoemPostContainer/>
        <div style={{paddingTop:15}}/>
        <PoemListContainer/>
      </Container>
    </div>

  )
}
export default MainPage;