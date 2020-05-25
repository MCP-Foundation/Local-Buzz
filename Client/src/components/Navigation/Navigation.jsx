import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Navigation/Navigation.css';
import Logo from '../Logo';

function Navigation() {

  function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  function logoutUser(){
    deleteCookie('userToken')
  }
  return (
    <section className="NavbarComponent">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/forum">
          <Logo />
        </Navbar.Brand>
        <Nav className="mr-auto" navbar>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/forum">Forum</Nav.Link>
          {document.cookie ? <Nav.Link href="/account">Account</Nav.Link>: <p></p> }
          {document.cookie ? <Nav.Link onClick={logoutUser} href="/logout">Log Out</Nav.Link> : <Nav.Link href="/login">Sign In</Nav.Link>}
          {document.cookie ? <p></p> : <Nav.Link href="/register">Sign Up</Nav.Link> }
        </Nav>
      </Navbar>
    </section>
  );
}

export default Navigation;
