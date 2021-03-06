import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import BackgroundImg from '../../images/covid-background.jpeg'
import Toolbar from '../../Components/Toolbar';
import LoginForm from './components';



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

  loginBox: {
    width: '500px',
    height: '350px',
    backgroundColor: 'white',
    borderRadius: '10px',
    marginTop: '18vh',
    display: 'flex',
    flexDirection: 'column',
    
    WebkitBoxShadow: '2px 4px 8px 0.5px',
  },
  textfield: {
    WebkitBoxShadow: '-webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.32)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',

  },
  passwordField: {
    marginTop: '3%',
  }

}))

export default function Login() {
  const classes = UseStyles();

  
  
  return (
    <div className={classes.home}>
      
      <div className={classes.container} alt="">
        <Toolbar></Toolbar>
        <div className={classes.loginBox}>
          <Typography style={{marginTop: '3%' ,color: 'black'}} variant="h3">Login</Typography>
          <LoginForm></LoginForm>
        </div> 
        
      </div>
    </div>
  );
}


