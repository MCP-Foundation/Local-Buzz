import React from 'react';
import './Register.css';
import Navigation from '../Navigation/Navigation';
import RegisterForm from './RegisterForm';

function Register() {
  return (
    <section className="RegisterComponent">
      <Navigation />
      <h1>Sign up to create an account</h1>
      <RegisterForm />
    </section>
  );
}

export default Register;
