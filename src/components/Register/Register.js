import React, { Component } from 'react';
import '../Register/Register.css';
import Navigation from '../Navigation/Navigation';
import RegisterForm from './RegisterForm';

class Register extends Component {
  render() {
    return (
      <section className="RegisterComponent">
        <Navigation />
        <h1>Sign up to create an account</h1>
        <RegisterForm />
      </section>
    );
  }
}

export default Register;
