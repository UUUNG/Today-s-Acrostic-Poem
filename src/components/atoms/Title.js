import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
const Title = () => {

  return (
    <Link to="/">    
      <Typography variant="caption" gutterBottom>
      오늘의 3행시
      </Typography>
    </Link>

    
  )
}
export default Title;