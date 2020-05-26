import React, { Component } from 'react';
import './Register.css';
import Navigation from '../Navigation/Navigation';
import RegisterForm from './RegisterForm';
import { Button, Grommet } from 'grommet';
const theme = {
  global: {
    colors: {
      brand: '#2a48e7',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

class Register extends Component {
  state = {
    show: false,
  };

  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });

  registerUser = (e) => {
    const email = e.target.elements.email.value;
    console.log(email);
    const password = e.target.elements.password.value;
    console.log(password);
  };

  render() {
    return (
      <section className="RegisterComponent">
        <Navigation />
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
