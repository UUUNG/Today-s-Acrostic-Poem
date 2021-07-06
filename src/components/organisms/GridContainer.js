import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grids from '../molecules/Grids';
import GridHead from '../molecules/GridHead';
import GridButtons from '../atoms/GridButtons';
import Footer from '../atoms/Footer';

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

export default function GridContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
            {/* 명예의 전당 텍스트 부분 */}
          <GridHead name="명예의 전당" description="가장 좋아요를 많이 받은 주제 10가지를 선정하여 보여줍니다."/>
          <div className={classes.heroButtons}>
              {/* 뭔가 멋져 보이는 버튼들 */}
            <GridButtons></GridButtons>
        </div>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
        {/* 직접 만든 'Grids' 이름 은근 헷갈려서 나중에 바꿀게 */}
          <Grids></Grids>
        </Container>
      </main>
      <Footer classes={classes}></Footer>
    </React.Fragment>
  );
}