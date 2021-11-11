import { makeStyles } from '@material-ui/core';
import React from 'react';
import BackgroundImg from '../../images/covid-background.jpeg'

const UseStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
    verticalAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
    
  },
  container: {
    
    width: '100%',
    height: '100%',
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  },
  topBox: {
    backgroundColor: 'aqua',
    
    width: '100%',
    height: '10%',
    position:'relative'
  },
}))

export default function Home() {

  const classes = UseStyles();
  
  return (
    <div className={classes.home}>
      <div className={classes.container} alt="">
        <h1>
          Mateusssssssss
        </h1>
      </div>
    </div>
  );
}


