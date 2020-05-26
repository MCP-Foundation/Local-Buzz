import React, { Component } from 'react';
import './Register.css';
import Navigation from '../Navigation/Navigation';
import RegisterForm from './RegisterForm';

class Register extends Component {
  registerUser = (e) => {
    const email = e.target.elements.email.value;
    console.log(email);
    const password = e.target.elements.password.value;
    console.log(password);
  };

  render() {
    return (
      <section className="RegisterComponent">

        <Grommet theme={theme} full>
          <RegisterForm
            registerUser={this.registerUser}
            show={this.state.show}
            handleClose={this.handleClose}
            handleShow={this.handleShow}
          />
        </Grommet>
      </section>
    );
  }
}

export default Register;
