import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../Navigation/Navigation.css';

import Logo from '../Logo';

function Navigation() {
  return (
    <section className="NavbarComponent">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/posts">Posts</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>
          <Nav.Link href="/login">Sign In</Nav.Link>
          <Nav.Link href="/register">Sign Up</Nav.Link>
        </Nav>
      </Navbar>
    </section>
  );
}

export default Navigation;
