import React, { Component } from 'react';
import './Login.css';
import Navigation from '../Navigation/Navigation';
import LoginForm from './LoginForm';

class Login extends Component {
  loginUser = (e) => {
    const email = e.target.elements.email.value;
    console.log(email);
    const password = e.target.elements.password.value;
    console.log(e.target.elements.password);
  };

  render() {
    return (
      <section className="LoginComponent">
        <Navigation />
        <h1>Log into your account</h1>
        <LoginForm loginUser={this.loginUser} />
      </section>
    );
  }
}

export default Login;
