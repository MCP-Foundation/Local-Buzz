import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserProvider from './contexts/userContext.js';
import { TagProvider }  from "./contexts/tagContext";

import HomePage from './components/HomePage/HomePage';
import Forum from './components/Forum/Forum';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PostForm from './components/Forum/PostForm';
import Profile from './components/Profile/Profile';
import PostView from './components/Forum/PostView';

function App() {
  return (
    <Router>
      <TagProvider>
      <UserProvider>
        <section className="App">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/forum">
              <Forum />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/account">
              <Profile />
            </Route>
            <Route path="/logout">
              <Forum/>
            </Route>
            <Route path="/post">
              <PostForm />
            </Route>
            <Route path="/viewPost/:id/:user_id">
              <PostView/>
            </Route>
          </Switch>
        </section>
      </UserProvider>
      </TagProvider>
    </Router>
  );
}

export default App;
