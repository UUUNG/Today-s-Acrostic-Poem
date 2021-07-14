import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import GridHead from '../molecules/GridHead';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';

import PersonIcon from '@material-ui/icons/Person';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CheckIcon from '@material-ui/icons/Check';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

import Button from '@material-ui/core/Button';
import Row from '../molecules/Row'
import Typography from '@material-ui/core/Typography';

import Reple from '../molecules/Reple'
import ReplyRow from '../molecules/ReplyRow'

function createData(word, name, likes,comment) {
  return {
    word,
    name,
    likes,
    comment,
    history: [
      { name: '피구피규', comment: 'ㅋㅋㅋㅋㅋ아 개웃기네zzzzzzzzzzzzzz' },
      { name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },
    ],
  };
}

/**type체킹 부분. */
Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comment: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const weeklyRows = [
  {'word':'바나나','name':'피구피규','likes':37,'comment':10, 'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'김다은','name':'이부','likes':33,'comment':12,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'최재웅','name':'숨겨진트롤','likes':23,'comment':3,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'한승우','name':'피피융신','likes':17,'comment':5,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
];

const monthlyRows = [
  createData('복숭아','피구피규',37,10),
  createData('김다은','이부', 33,12),
  createData('최재웅','숨겨진트롤',23,3),
  createData('한승우','피융신',17,5),
];

const yearlyRows = [
  {'word':'복숭아','name':'피구피규','likes':37,'comment':10, 'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'김다은','name':'이부','likes':33,'comment':12,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'최재웅','name':'숨겨진트롤','likes':23,'comment':3,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
  {'word':'한승우','name':'피피융신','likes':17,'comment':5,'history':[{name:'피구피규',comment:'ㅋㅋㅋd아 개웃기네'},{ name: '뇽뇽', comment: '이게 왜 랭킹? ㄵ' },]},
];

const useStyles = makeStyles((theme) => ({

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  
}));

const RankingContainer = (props) => {
  const classes = useStyles();
  const [sorting, setSorting] = React.useState('주간');
  const rankData = React.useState(props);
  const [replyData, setReplyData]=React.useState(null);
  const [monthlylist, setMonthlyList]=React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openReply, setOpen_reply] = React.useState(false);


  const callApi = async()=>{
    const response = await fetch('/RankingPageMonth');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{
      callApi()
      .then(res=>setMonthlyList(res[0]))
      .catch(err=>console.log(err));
  }, []);

  const handleSortingClick = (category) => {
    setSorting(category);
  };

  const CheckedButton = ({check}) => {
    if(check === '주간' && monthlylist!=null){
      setReplyData(monthlylist)
    }
    else if(check === '월간'&& monthlylist!=null){
      setReplyData(monthlylist)
    }
    else if(check === '연간' && monthlylist!=null){
      setReplyData(monthlylist)
    }
    console.log("replyData", {replyData});
    return(
      <>
        <CheckIcon/>
        <div style={{fontWeight:'bolder'}}>{check}</div>
      </>)
  }

  return (
    <div>
      <div className={classes.heroContent}>
        <GridHead name="주간/월간/연간랭킹" description="주간/월간/연간별 랭킹을 보여줍니다."/>
      </div>
      {monthlylist? <div>{monthlylist[0].created}</div> : <div></div>}
      <Box flexDirection="row" style={{display: 'inline-flex'}}>
        <Button onClick={() => handleSortingClick('주간')}>
          {sorting=== '주간' ? <CheckedButton check={'주간'}/> : '주간' } 
        </Button>
        <Button onClick={() => handleSortingClick('월간')}>
          {sorting=== '월간' ? <CheckedButton check={'월간'}/> : '월간' } 
        </Button>
        <Button onClick={() => handleSortingClick('연간')}>
          {sorting=== '연간' ? <CheckedButton check={'연간'}/> : '연간' }
        </Button> 
      </Box>
      <div style={{paddingTop:15}}/>
      <TableContainer component={Paper}>
        <Table aria-label="Ranking table">
          <TableBody>
          {rankData[0]['props'] ? rankData[0]['props'].map((row) => (
            <React.Fragment>
              <Paper variant="outlined" square style={{display:'flex', flexDirection:'column',flexGrow:5,flexBasis:0}}>
              {/* {rankData[0]['props'] ? rankData[0]['props'].map((row) => ( */}
                <TableRow className={classes.root} onClick={() => setOpen(!open)}>
                    <div style={{display:'flex', flexGrow:5,flexBasis:0}}>
                      <Typography style={{flexGrow:2,flexBasis:0}}>{row.word}</Typography>
                      <div style={{display:'flex',flexGrow:1,flexBasis:0}}>
                        <PersonIcon />
                        <Typography >{row.name}</Typography>
                      </div>
                      <div style={{display:'flex',flexGrow:1,flexBasis:0}}>
                        <ThumbUpAltIcon />
                        <Typography>{row.likes}</Typography>
                      </div>
                      <div style={{display:'flex',flexGrow:1,flexBasis:0}}>
                        <CommentIcon />
                        <Typography>{row.comment}</Typography>
                      </div>
                    </div>
                </TableRow>
            {/*   )) : <div></div>
              } */}
        
              <TableRow>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box margin={3}>
                    <Paper variant="outlined" square style={{padding:10}}>
                      <Typography variant="caption" gutterBottom component="div">
                        바나나 나랑 나눠먹자
                      </Typography>
                      <div style={{display:'flex',justifyContent:'center'}}>
                        <Typography variant="caption" >공유하기</Typography>
                        <ShareIcon fontSize="small"/>
                      </div>
                      
                    </Paper>
                    <Table size="small" aria-label="comments">
                      <TableBody>
                        <div style={{display:'flex', flexGrow:5,flexBasis:0 , minWidth:'parent'}}>
                          <ReplyRow replyDatas={replyData}></ReplyRow>
                        </div>
                        <div style={{display:'flex',flexGrow:1,flexBasis:0}}>
                          <Button onClick={() => setOpen_reply(!openReply)}>
                            댓글쓰기
                          </Button>
                        </div>
                          <Collapse in={openReply} timeout="auto" unmountOnExit>
                            <div style={{ margin:5,display:'flex', flexDirection:'row'}}>
                              <TextField required id="standard-required"  defaultValue="닉네임"/>
                              <TextField required id="standard-required"  defaultValue="비밀번호" />
                              <TextField required id="standard-required"  defaultValue="내용" />
                            </div>
                        </Collapse>
                      </TableBody>
                    </Table>
                   {/*  {replyData ? replyData.map((reple_row) => (
                      <div>
                        {reple_row ? <Table>
                        <Reple key={reple_row.name} reple_rows={reple_row}></Reple>
                        </Table> : <></>}
                      </div>
                    )) : <></>
                    } */}
                    {/* <Reple rows={row}></Reple> */}
                  </Box>
                </Collapse>
              </TableRow>
              </Paper>
            </React.Fragment>
          )) : <div></div>
          }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default RankingContainer;