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
import PersonIcon from '@material-ui/icons/Person';


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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Grids = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <Grid container spacing={5}>
        {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <Popup trigger={
                    <Button style={{display:'flex',justifyContent:'space-between',backgroundColor:'#f2f4f7',borderColor:'1px solid black'}} 
                    onClick={() => setOpen(!open)}>
                        <CardContent className={classes.cardContent}>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} image="https://cdn.pixabay.com/photo/2014/12/21/23/39/bananas-575773_960_720.png" title="Image title"/>
                        </Hidden>
                        <Typography gutterBottom variant="h4" component="h2"> 바나나 </Typography>
                        <ThumbUpAltIcon /> 100
                        </CardContent>
                    </Button>
                } position="right center">
                        {/* 클릭 시 팝업 출력 부분 */}
                        <div style={{display:'flex', backgroundColor:'#f2f4f7'}}>
                            <div style={{display:'flex'}}>
                                <div style={{display:'flex', minWidth: '100px'}}>
                                    <PersonIcon />
                                    <Typography variant="caption"style={{textAlign:'center'}}>피구피규</Typography>
                                </div>
                                <Typography variant="caption" style={{textAlign:'center'}}>바나나 나랑 나눠먹을랭?</Typography>
                            </div>
                            <div style={{display:'flex'}}>
                                <ThumbUpAltIcon />
                                <Typography variant="caption" style={{textAlign:'center'}}>13</Typography>
                            </div>
                        </div>
                    </Popup>
                </Card>        
            </Grid>
        ))}
     </Grid>
    )
  }
  export default Grids;
