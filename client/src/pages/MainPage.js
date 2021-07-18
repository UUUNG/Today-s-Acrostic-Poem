import React,{useEffect}  from 'react';
import KeywordContainer from '../components/organisms/KeywordContainer';
import PoemListContainer from '../components/organisms/PoemListContainer';
import Container from '@material-ui/core/Container';
import AllPoemList from '../components/organisms/AllPoemList';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';
import GridHead from '../components/molecules/GridHead';
const useStyles = makeStyles((theme)=>({

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const MainPage = () => {

  const classes = useStyles();
  const [likeList, setLikeList] = React.useState([]);
  const [latestList, setLatestList] = React.useState([]);
  const [plus, setPlus] = React.useState(false);

  const callLikeApi = async()=>{

    const response = await fetch('/MainLike');
    const body = await response.json();
    return body;
  }

  const callLatestApi = async()=>{
    const response = await fetch('/MainLatest');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{

    callLikeApi()
    .then(res=>{
      setLikeList(res.data)
    })
    .catch(err=>console.log(err));

    callLatestApi()
    .then(res=>{
      setLatestList(res.data)
    })
    .catch(err=>console.log(err));

  }, []);

  const [displayData, setDisplayData]=React.useState([]);
  const [sorting, setSorting] = React.useState('실시간 좋아요순');
  const handleSortingClick = (category) => {
    if(category==='더보기'){
      setPlus(!plus);
    }else{
      setSorting(category);
    }
  };

  const CheckedButton = ({check}) => {
    if(check === '실시간 좋아요순'&&likeList){
      setDisplayData(likeList)
    }
    else if(check === '최신순'&&latestList){
      setDisplayData(latestList)
    }

    return(
      <>
        <CheckIcon/>
        <div style={{fontWeight:'bolder'}}>{check}</div>
      </>)
  }

  return (
    <div>
        {plus===true ?        
        <div>
          <Container maxWidth="sm">
          <div className={classes.heroContent}>
            <GridHead name="실시간 3행시" description=" "/>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex'}}>
              <Button onClick={() => handleSortingClick('실시간 좋아요순')} style={{borderRight:'1px solid #EEE'}}>
                {sorting=== '실시간 좋아요순' ? <CheckedButton check={'실시간 좋아요순'}/> : '실시간 좋아요순' } 
              </Button>
              <Button onClick={() => handleSortingClick('최신순')}>
                {sorting=== '최신순' ? <CheckedButton check={'최신순'}/> : '최신순' } 
              </Button>
            </div>
            <Button onClick={() => handleSortingClick('더보기')}>
              {plus ? '메인화면으로 돌아가기' : '더보기' } 
            </Button>    
          </div>
          </Container>
          <AllPoemList displayData={displayData}/>
        </div> :
        <Container maxWidth="sm">
          <KeywordContainer/>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex'}}>
              <Button onClick={() => handleSortingClick('실시간 좋아요순')} style={{borderRight:'1px solid #EEE'}}>
                {sorting=== '실시간 좋아요순' ? <CheckedButton check={'실시간 좋아요순'}/> : '실시간 좋아요순' } 
              </Button>
              <Button onClick={() => handleSortingClick('최신순')}>
                {sorting=== '최신순' ? <CheckedButton check={'최신순'}/> : '최신순' } 
              </Button>
            </div>
            <Button onClick={() => handleSortingClick('더보기')}>
              {plus=== '더보기' ? <CheckedButton check={'더보기'}/> : '더보기' } 
            </Button>    
          </div>
          <div style={{paddingTop:15}}/>
          <PoemListContainer  displayData={displayData}/>
        </Container>
        }
    </div>

  )
}
export default MainPage;