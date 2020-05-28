import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Navigation/Navigation.css';
import Logo from '../Logo';

// import {NavDropdown} from '@react-bootstrap.react-bootstrap.nav-dropdown'
// import {Nav} from '@react-bootstrap.react-bootstrap.nav'
// import { Button } from '@react-bootstrap.react-bootstrap.form'
// import {Form} from '@react-bootstrap.react-bootstrap.form'
// import {FormControl} from '@react-bootstrap.react-bootstrap.form-control'
// import {Navbar} from '@react-bootstrap.react-bootstrap.navbar'
// import ReactBootstrapStyle from '@react-bootstrap.react-bootstrap.internal.style-links';


function Navigation() {

  function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  function logoutUser() {
    deleteCookie('userToken')
  }

  return (
    <section className="NavbarComponent">

      <Navbar className='navigation' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/forum">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className='nav-items'>
            <Nav.Link href="/">About</Nav.Link>
            {document.cookie ? <Nav.Link href="/forum">Forum</Nav.Link>: <p></p>}
            {document.cookie ? <Nav.Link className='nav-item' href="/account">Account</Nav.Link> : <p></p>}
            {document.cookie ? <Nav.Link className='nav-item' onClick={logoutUser} href="/logout">Log Out</Nav.Link> : <Nav.Link className='nav-item' href="/login">Sign In</Nav.Link>}
            {document.cookie ? <p></p> : <Nav.Link className='nav-item signup' href="/register">Sign Up</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}

export default Navigation;