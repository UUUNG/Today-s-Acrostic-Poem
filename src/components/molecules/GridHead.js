import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const GridHead = ({name, description}) => {

  return (
    <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {name}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {description}
        </Typography>
        
    </Container>
  )
}
export default GridHead;