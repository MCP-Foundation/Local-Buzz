import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <section className="App">
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
