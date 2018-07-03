import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Hub from '../../pages/Hub';
import Home from '../../pages/Home';

const App = () => (
  <Router basename = {process.env.PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/home' component = {Home}/>
        <Route exact path = '/hub' component = {Hub}/>
      </Switch>
    </div>
  </Router>
)

export default App;
