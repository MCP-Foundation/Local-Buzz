import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage';
import Forum from './components/Forum/Forum';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PostForm from './components/Forum/PostForm';

function App() {
  return (
    <Router>
      <section className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
<<<<<<< HEAD:src/App.js

          <Route path="/posts">
            <Forum />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
=======
          <Route exact path="/forum">
            <Forum />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
>>>>>>> 2dfd849f3b1bb4541ccbb82755fd48fc238b3f78:Client/src/App.js
            <Register />
          </Route>

          <Route path="/post">
            <PostForm />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
