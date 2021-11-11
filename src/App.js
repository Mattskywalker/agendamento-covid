
import './App.css';
import Subscribe from './pages/Subscribe';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home';




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
