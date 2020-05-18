import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../Navigation/Navigation.css';

import Logo from '../Logo';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {

    return () => {
      cleanup
    }
  }, [input]);
  
  function verifyUserlogin() {

  };

  return (
    <section className="NavbarComponent">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Nav className="mr-auto" navbar>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/posts">Posts</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>
          <Nav.Link href="/login">Sign In</Nav.Link>
          <Nav.Link href="/register">Sign Up</Nav.Link>
          {isLoggedIn ? <Nav.Link className="" href="/logout">Logout</Nav.Link> : <p></p>}
        </Nav>
      </Navbar>
    </section>
  );
}

export default Navigation;
