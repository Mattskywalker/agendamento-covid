import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import BackgroundImg from '../../images/covid-background.jpeg'
import TextField from '@material-ui/core/TextField';


const UseStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
    verticalAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'    
    
  },
  container: {
    
    width: '100%',
    height: '100%',
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    
  },
  
  toolbar: {
    height: '8%',
    width: '100%',
    backgroundColor: '#000',
    opacity: '0.2'
  },

  loginBox: {
    width: '30%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: '10px',
    marginTop: '9%',
    display: 'flex',
    flexDirection: 'column',
    
    WebkitBoxShadow: '2px 8px 8px 0.5px',
  }
}))

export default function Home() {

  const classes = UseStyles();
  
  return (
    <div className={classes.home}>
      
      <div className={classes.container} alt="">
        <div className={classes.toolbar}></div>

        <div className={classes.loginBox}>
          <Typography style={{marginTop: '3%' ,color: 'black'}} variant="h3">Login</Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField style={{marginTop: '3%'}} id="outlined-basic" label="Login" variant="filled" />
            <TextField style={{marginTop: '3%'}} id="outlined-basic" label="Senha" variant="filled" />
          </form>
        </div> 
        
      </div>
    </div>
  );
}


