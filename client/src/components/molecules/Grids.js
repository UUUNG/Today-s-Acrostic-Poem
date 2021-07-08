import React from 'react';
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

  
function createData(subject, like, img) {
  return {
    subject,
    like,
    img,
  };
}

const griddatas = [
  createData('바나나','341',"https://cdn.pixabay.com/photo/2014/12/21/23/39/bananas-575773_960_720.png"),
  createData('복숭아','291','https://cdn.pixabay.com/photo/2013/11/28/09/58/peach-219845_960_720.jpg'),
  createData('청포도','277', 'https://cdn.pixabay.com/photo/2014/12/28/18/22/grapes-582207_960_720.jpg'),
  createData('산딸기','262','https://cdn.pixabay.com/photo/2014/08/21/09/25/raspberries-423194_960_720.jpg'),
  createData('코코넛','259','https://cdn.pixabay.com/photo/2016/07/06/20/56/coconut-1501334_960_720.jpg'),
  createData('두리안','231','https://cdn.pixabay.com/photo/2013/07/12/19/24/durian-fruit-154723_960_720.png'),
  createData('무화과','216','https://cdn.pixabay.com/photo/2012/04/26/19/37/fig-42900_960_720.png',),
  createData('오렌지','179','https://cdn.pixabay.com/photo/2012/04/26/12/52/orange-42395_960_720.png'),
  createData('토마토','163','https://cdn.pixabay.com/photo/2014/04/02/10/43/tomato-304316_960_720.png'),
  createData('한라봉','143','https://cdn.pixabay.com/photo/2014/03/24/17/07/orange-295065_960_720.png'),
];


 

const Grids = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <Grid container spacing={5}>
        {griddatas.map((griddata) => (
            <Grid item key={griddata.subject} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              <Popup trigger={
                  <Button style={{display:'flex',justifyContent:'space-between',backgroundColor:'#f2f4f7',borderColor:'1px solid black'}} 
                  onClick={() => setOpen(!open)}>
                      <CardContent className={classes.cardContent}>
                      <Hidden xsDown>
                          <CardMedia className={classes.cardMedia} image={griddata.img} title="Image title"/>
                      </Hidden>
                      <Typography gutterBottom variant="h4" component="h2"> {griddata.subject} <ThumbUpAltIcon /> {griddata.like} </Typography>
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
