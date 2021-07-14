import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Popup from 'reactjs-popup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PoemListContainer from '../organisms/PoemListContainer';


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
}));

const Grids = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hofDatas, setHofData] = React.useState([]);
  
    const callApi = async()=>{
      const response = await fetch('/HOFPage');
      const body = await response.json();
      return body;
    }
    
    useEffect(()=>{
    
      callApi()
      .then(res=>{
        console.log(res)
        setHofData(res.data)
      })
      .catch(err=>console.log(err));
    }, []);

    return (
        <Grid container spacing={5}>
        {hofDatas.map((hofData) => (
            <Grid item key={hofData.subject} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              <Popup trigger={
                  <Button style={{display:'flex',justifyContent:'space-between',backgroundColor:'#f2f4f7',borderColor:'1px solid black'}} 
                  onClick={() => setOpen(!open)}>
                      <CardContent className={classes.cardContent}>
                      <Hidden xsDown>
                          <CardMedia className={classes.cardMedia} image={hofData.img_url} title="Image title"/>
                      </Hidden>
                      <Typography gutterBottom variant="h4" component="h2"> {hofData.subject} <ThumbUpAltIcon /> {hofData.likes} </Typography>
                      </CardContent>
                  </Button>
              } position="right center">
                      <div style={{display:'flex', backgroundColor:'#f2f4f7'}}>
                          {/* 클릭 시 팝업 출력 부분 */}
                          <PoemListContainer></PoemListContainer>
                      </div>
                </Popup>
              </Card>        
            </Grid>
        ))}
     </Grid>
    )
  }
  export default Grids;
