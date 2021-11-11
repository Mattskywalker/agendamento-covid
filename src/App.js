
import './App.css';
import Subscribe from './pages/Subscribe';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import { renderRoutes } from 'react-router-config';
import routes from './routes'




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {renderRoutes(routes)}
        </Switch>

    </div>
    </Router>
  );
}

export default App;
