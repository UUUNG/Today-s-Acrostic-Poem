import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const GridHead = () => {

  return (
    <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            명예의 전당
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            가장 좋아요를 많이 받은 주제 10가지를 선정하여 보여줍니다.
        </Typography>
        
    </Container>
  )
}
export default GridHead;