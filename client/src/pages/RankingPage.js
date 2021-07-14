import React,{useEffect} from 'react';
import Container from '@material-ui/core/Container';
import RankingContainer from '../components/organisms/RankingContainer'
const RankingPage = () => {
  const [rankData, setRankData]=React.useState(null);
  
  const callApi = async()=>{
    const response = await fetch('/RankingPage');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{
      callApi()
      .then(res=>setRankData(res[0]))
      .catch(err=>console.log(err));
  }, []);

  return (
    <div>
      {rankData ? <Container maxWidth="sm">
        <RankingContainer props = {rankData}/>
      </Container> : <div></div>}
      
    </div>

  )
}
export default RankingPage;