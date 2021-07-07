import React from 'react';
//import PrimaryButton from '../atoms/PrimaryButton'
import { makeStyles, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    color : '#FFF',
  },
  buttonText: {
    fontSize    : 14,
    fontWeight  : 500,
  }
})) 

const Navbar = () => {
  const classes = useStyles()

  return (
    <div>
      <Button
        className={classes.button}
        onClick={() => window.location.href="/NoticePage"}
      >
        <Typography 
          style={{
            fontSize    : 14,
            fontWeight  : 500,
            color       : '#FFF',
          }}
        >
          공지사항
        </Typography>
      </Button>
      <Button
        className={classes.button}
        onClick={() => window.location.href="/HOFPage"}
      >
        <Typography 
          style={{
            fontSize    : 14,
            fontWeight  : 500,
            color       : '#FFF',
          }}
        >
          명예의 전당
        </Typography>
      </Button>
      <Button
        className={classes.button}
        onClick={() => window.location.href="/RankingPage"}
      >
        <Typography 
          style={{
            fontSize    : 14,
            fontWeight  : 500,
            color       : '#FFF',
          }}
        >
          주간/월간/연간 랭킹
        </Typography>
      </Button>
    </div>
    
  )
}
export default Navbar;