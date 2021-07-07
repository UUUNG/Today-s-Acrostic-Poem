import React from 'react';
import Typography from '@material-ui/core/Typography';

const Title = () => {

  return (  
    <Typography 
      variant="caption" 
      gutterBottom 
      onClick={()=>window.location.href="/"}
      style={{
        fontSize: 20,
        fontWeight: 700,
        cursor: 'pointer',
        color: '#FFF'
      }}
    >
      오늘의 3행시
    </Typography>
  )
}
export default Title;