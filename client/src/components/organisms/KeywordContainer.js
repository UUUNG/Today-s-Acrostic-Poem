import React  from 'react';
import Typography from '@material-ui/core/Typography';
import PoemPostContainer from './PoemPostContainer';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Schedule from 'react-schedule-job';

const KeywordContainer = () => {

  const [open_content, setOpen_content] = React.useState(false);
  const [keyword, setKeyword] = React.useState();

  const callKeywordApi = async()=>{
    const response = await fetch('/Keyword');
    const body = await response.json();
    return body;
  }

  const callKeyword = () => {
    callKeywordApi()
    .then(res=>{
      setKeyword(res.data[0].keyword)
      console.log(res.data[0].keyword)
    })
    .catch(err=>console.log(err));

  };
  const jobs = [
    {
      fn: callKeyword,
      id: '1',
      schedule: '0 0 * * *'
    }
  ]

  return (

    <div style={{margin:20,display:'flex',justifyContent:'center',flexDirection:'column'}}>
      <Typography variant="caption">
        오늘은
      </Typography>

      <Schedule
        jobs={jobs}
        timeZone='Asia/Seoul'
        // "UTC", "local" or "YOUR PREFERRED TIMEZONE",
        dashboard={{
          hidden: true
          // if true, dashboard is hidden
        }}
      />
      <Button  onClick={() => setOpen_content(!open_content)}>
        <Typography variant="h1" style={{textAlign:'center'}}>
          {keyword}
        </Typography>
      </Button>
 
      <Collapse in={open_content} timeout="auto" unmountOnExit>
        <PoemPostContainer keyword={keyword}/>
      </Collapse>
    </div> 
  )
}
export default KeywordContainer;