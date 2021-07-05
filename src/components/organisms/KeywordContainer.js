import React from 'react';
import Typography from '@material-ui/core/Typography';
const KeywordContainer = () => {

  return (

    <div style={{margin:20,display:'flex',justifyContent:'center',flexDirection:'column'}}>
      <Typography variant="caption">
        오늘은
      </Typography>
      <Typography variant="h1" style={{textAlign:'center'}}>
        바나나
      </Typography>
    </div>
  )
}
export default KeywordContainer;