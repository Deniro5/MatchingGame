import React, { Component } from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import '../scss/app.scss';
import Home from './Home';
import Board from './Board';


const history = createHistory();



class App extends Component {

  render() {
    return (
      <Router history={history}>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/:diff" component = {Board}/>
          />
        </Switch>
      </div>  
      </Router>
    );
  }
}

export default App;
