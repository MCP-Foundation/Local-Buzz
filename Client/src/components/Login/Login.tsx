import React, { Component } from 'react';
import './Login.css';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <section className="LoginComponent">
        <LoginForm />
      </section>
    );
  }
}

export default Login;
