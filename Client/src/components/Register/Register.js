import React, { Component } from 'react';
import './Register.css';
import Navigation from '../Navigation/Navigation';
import RegisterForm from './RegisterForm';

class Register extends Component {
  state = {
    show: false,
  };

  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });

  render() {
    return (
      <section className="RegisterComponent">
        <Navigation />
        <RegisterForm
          show={this.state.show}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
        />
      </section>
    );
  }
}

export default Register;
