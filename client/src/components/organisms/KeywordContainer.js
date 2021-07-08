import React from 'react';
import Typography from '@material-ui/core/Typography';
import PoemPostContainer from './PoemPostContainer';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';


const KeywordContainer = () => {

  const [open_content, setOpen_content] = React.useState(false);


  return (

    <div style={{margin:20,display:'flex',justifyContent:'center',flexDirection:'column'}}>
      <Typography variant="caption">
        오늘은
      </Typography>


      <Button  onClick={() => setOpen_content(!open_content)}>
        <Typography variant="h1" style={{textAlign:'center'}}>
          바나나
        </Typography>
      </Button>

      
      <Collapse in={open_content} timeout="auto" unmountOnExit>
        <PoemPostContainer/>
      </Collapse>

      
        
      
      
    </div>
    
  )
}
export default KeywordContainer;