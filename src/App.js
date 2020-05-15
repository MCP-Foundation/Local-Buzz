import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage';
import Forum from './components/Forum/Forum';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <Router>
      <section className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/posts">
            <Forum />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
