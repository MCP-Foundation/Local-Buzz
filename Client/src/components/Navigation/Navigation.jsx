import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Navigation/Navigation.css';
import Logo from '../Logo';

function Navigation() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    document.cookie
      ? fetch('/user')
        .then(res => {
          if (res.status === 200) return res.json();

          return null
        })
        .then(json => setUser(json)) : setUser(null)
  }, [setUser]);

  return (
    <section className="NavbarComponent">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Nav className="mr-auto" navbar>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/forum">Forum</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>
          {user ? <Nav.Link href="/logout">Log Out</Nav.Link> : <Nav.Link href="/login">Sign In</Nav.Link>}
          {user ? <p></p> : <Nav.Link href="/register">Sign Up</Nav.Link> }
        </Nav>
      </Navbar>
    </section>
  );
}

export default Navigation;
