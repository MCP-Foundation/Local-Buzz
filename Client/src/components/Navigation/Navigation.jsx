import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../Navigation/Navigation.css';

import Logo from '../Logo';

function Navigation() {
<<<<<<< HEAD:src/components/Navigation/Navigation.jsx
  const [isLoggedIn, setIsLoggedIn] = useState(false);

=======
>>>>>>> 2dfd849f3b1bb4541ccbb82755fd48fc238b3f78:Client/src/components/Navigation/Navigation.jsx
  return (
    <section className="NavbarComponent">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Nav className="mr-auto" navbar>
          <Nav.Link href="/">Home</Nav.Link>
<<<<<<< HEAD:src/components/Navigation/Navigation.jsx
          <Nav.Link href="/posts">Posts</Nav.Link>
          <Nav.Link href="/post">Create A Post</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>
          <Nav.Link href="/login">Sign In</Nav.Link>
          <Nav.Link href="/register">Sign Up</Nav.Link>
          {isLoggedIn ? (
            <Nav.Link className="" href="/logout">
              Logout
            </Nav.Link>
          ) : null}
=======
          <Nav.Link href="/forum">Forum</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>
          <Nav.Link href="/login">Sign In</Nav.Link>
          <Nav.Link href="/register">Sign Up</Nav.Link>
>>>>>>> 2dfd849f3b1bb4541ccbb82755fd48fc238b3f78:Client/src/components/Navigation/Navigation.jsx
        </Nav>
      </Navbar>
    </section>
  );
}

export default Navigation;
