import { Button, makeStyles, Typography, Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import BackgroundImg from '../../images/covid-background.jpeg'
import TextField from '@material-ui/core/TextField';
import Toolbar from '../../Components/Toolbar';



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
    height: '415px',
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

export default function SchedulingPage() {
  const classes = UseStyles();

  //cpf, idade, profissão, possui comorbidade ( boolean ) , comorbidade ( descrição informando qual possui, data e hora do agendamento )

  const [valueCheck, setCheck] = useState(false);
  
  return (
    <div className={classes.home}>
      
      <div className={classes.container} alt="">
        <Toolbar></Toolbar>
        <div className={classes.loginBox}>
          <Typography style={{marginTop: '3%' ,color: 'black'}} variant="h3">Agendar</Typography>
          
          <form className={classes.form} noValidate autoComplete="off">
            <TextField type='text' className={classes.textfield} style={{marginTop: '3%'}} id="outlined-basic" label="CPF" variant="filled" />
            <TextField type='text' className={classes.textfield} style={{marginTop: '3%'}} id="outlined-basic" label="Idade" variant="filled" />
            <TextField type='text' className={classes.textfield} style={{marginTop: '3%'}} id="outlined-basic" label="Profissão" variant="filled" />
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography variant="body1">Possui comorbidade ?</Typography>
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={() => {setCheck(!valueCheck)}}
                    checked={valueCheck}
                    style={{marginLeft: '2px'}}
                />
            </div>
            <Button style={{marginTop: '4%'}} type="submit" variant="contained">
              <Typography variant="">Entrar</Typography>
            </Button>
            
          </form>
        </div> 
        
      </div>
    </div>
  );
}


