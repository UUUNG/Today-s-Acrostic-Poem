import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import HeadContainer from './HeadContainer';
import Grids from '../molecules/Grids';
import GridHead from '../molecules/GridHead';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function GridContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HeadContainer/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <GridHead></GridHead>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
            <Grid item>
                <Button variant="contained" color="primary">
                Main call to action
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="primary">
                Secondary action
                </Button>
            </Grid>
            </Grid>
        </div>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
        {/* 직접 만든 'Grids' 이름 은근 헷갈려서 나중에 바꿀게 */}
          <Grids></Grids>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}