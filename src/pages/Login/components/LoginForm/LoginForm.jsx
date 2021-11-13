import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Link, makeStyles, TextField, Typography } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react'
import clsx from 'clsx';

const UseStyles = makeStyles((theme) => ({
  
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

export default function LoginForm() {
    const classes = UseStyles();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div>
            <form className={classes.form} noValidate autoComplete="off">
            <TextField className={classes.textfield} style={{marginTop: '3%'}} id="outlined-basic" label="Login" variant="filled" />
            <FormControl style={{marginTop: '3%'}} className={clsx(classes.margin, classes.textField)} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>
                <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    </InputAdornment>
                }
                />
            </FormControl>
            
            <Button style={{marginTop: '6%'}} type="submit" variant="contained">
              <Typography variant="">Entrar</Typography>
            </Button>
            <Link
              style={{marginTop: '6%'}}
              component="button"
              variant="body2"
              
            >
              Cadastre-se
            </Link>
            
          </form>
        </div>
    )
}
