
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
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
