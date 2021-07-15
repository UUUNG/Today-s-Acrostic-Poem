import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridHead from '../components/molecules/GridHead';
import PaginationTable from '../components/molecules/PaginationTable'
const useStyles = makeStyles((theme)=>({

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function NoticePage() {
  const classes = useStyles();
  const [notice, setNotice]=React.useState(0);

  const callApi = async()=>{
    const response = await fetch('/NoticePage');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{
      callApi()
      .then(res => {
        setNotice(res.data)
      })
      .catch(err=>{
        console.log(err)
      });
  }, []);

  return (
    <div>
      <div className={classes.heroContent}>
        <GridHead name="공지사항" description=" "/>
      </div>
      <PaginationTable data={notice} name={"notice"}/>
    </div>
  );
}