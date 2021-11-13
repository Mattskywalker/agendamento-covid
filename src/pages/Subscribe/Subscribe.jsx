import { makeStyles, Typography} from '@material-ui/core';
import BackgroundImg from '../../images/covid-background.jpeg'
import Toolbar from '../../Components/Toolbar';
import SubscribeForm from './Components';




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
    height: '450px',
    backgroundColor: 'white',
    borderRadius: '10px',
    marginTop: '18vh',
    display: 'flex',
    flexDirection: 'column',
    
    WebkitBoxShadow: '2px 4px 8px 0.5px',
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',

  },
  

}))

export default function Subscribe() {
  const classes = UseStyles();

  //cpf, idade, profissão, possui comorbidade ( boolean ) , comorbidade ( descrição informando qual possui, data e hora do agendamento )
  


  

  return (
    <div className={classes.home}>
      
      <div className={classes.container} alt="">
        <Toolbar></Toolbar>
        <div className={classes.loginBox}>
          <Typography style={{marginTop: '3%' ,color: 'black'}} variant="h3">Cadastro</Typography>
          <SubscribeForm></SubscribeForm>
          
        </div> 
        
      </div>
    </div>
  );
}


