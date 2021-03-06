import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, makeStyles, TextField, Typography } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React  from 'react'
import clsx from 'clsx';


const UseStyles = makeStyles((theme) => ({
    
    
    textfield: {
      WebkitBoxShadow: '-webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.32)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '10%',
      marginRight: '10%',
  
    },
  }))

export default function SubscribeForm() {

    const classes = UseStyles();

    const [values, setValues] = React.useState({
        amount: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showConfirmPassword: false 
      });

    const [formState, setFormState] = React.useState({
      isValid: false,
      formData: {
        name: '',
        login: '',
        password: ''  ,
        confirmPassword: '',
      }
    })

    function passwordMatch(password, confirmPassword){
        if(values.password === values.confirmPassword){
          console.log("As senhas batem!")
          return true;
        }
        return false;
      }

      const handleChange = (prop) => (event) => {
        
        setFormState(formState => ({
          ...formState,
          formData: {
            ...formState.formData,
            [prop]: event.target.value,
          }
        }));
        
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField onChange={handleChange('name')} type='text' className={classes.textfield} style={{marginTop: '3%'}} id="outlined-basic" label="Nome" variant="filled" />
                <TextField onChange={handleChange('login')} type='text' className={classes.textfield} style={{marginTop: '3%'}} id="outlined-basic" label="Usuario" variant="filled" />
                <FormControl style={{marginTop: '3%'}} className={clsx(classes.margin, classes.textField)} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Sua senha</InputLabel>
                    <FilledInput
                    id="filled-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={formState.formData.password || ''}
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
                <FormControl style={{marginTop: '3%'}} className={clsx(classes.margin, classes.textField)} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Confirma????o de senha</InputLabel>
                    <FilledInput
                    id="filled-adornment-password"
                    type={values.showConfirmPassword ? 'text' : 'password'}
                    value={formState.formData.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownConfirmPassword}
                            edge="end"
                        >
                            {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>
                    }
                    />
                </FormControl>
                
                <Button 
                style={{marginTop: '4%'}}
                variant="contained"
                onClick={() => {console.log(formState.formData)}}
                >
                <Typography variant="">Cadastrar</Typography>
                </Button>
            
          </form>
            
        </div>
    )
}
