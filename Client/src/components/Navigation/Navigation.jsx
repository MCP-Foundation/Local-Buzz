import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Navigation/Navigation.css';
import Logo from '../Logo';
import jwt from 'jsonwebtoken'

function Navigation() {

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const verifyJWT = () => {
    setUserLoggedIn(true)
    const decodedToken = jwt.decode(localStorage.getItem('userToken'), { complete: true });
    const dateNow = new Date();

    if (decodedToken.exp < dateNow.getTime()) {
      console.log("Web Token Valid.")
    } else {
      console.log("Web Token Expired.")
    }
  };

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
          {userLoggedIn ? <p>signout, my guy</p> : <Nav.Link href="/login">Sign In</Nav.Link>}
          {userLoggedIn ? <p></p> : <Nav.Link href="/register">Sign Up</Nav.Link>}
          {/* <Nav.Link href="/register">Sign Up</Nav.Link> */}
        </Nav>
      </Navbar>
    </section>
  );
}

export default Navigation;
