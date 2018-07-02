import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Hub from '../../pages/Hub';

const App = () => (
  <Router basename = {process.env.PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path = '/Hub' component = {Hub}/>
      </Switch>
    </div>
  </Router>
)

export default App;
