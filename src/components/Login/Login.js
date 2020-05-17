import React, { Component } from 'react';
import './Login.css';
import Navigation from '../Navigation/Navigation';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <section className="LoginComponent">
        <Navigation />
        <h1>Log into your account</h1>
        <LoginForm />
      </section>
    );
  }
}

export default Login;
