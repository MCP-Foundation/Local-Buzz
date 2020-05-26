import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Navigation/Navigation.css';
import Logo from '../Logo';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import { Drawer, ButtonToolbar, Button } from 'rsuite';

function Navigation() {

  function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  function logoutUser() {
    deleteCookie('userToken')
  }

const [drawer, setDrawer] = useState({show: false});

const toggleOpenDrawer = () => {
  setDrawer({ show: true });
}
const toggleCloseDrawer = () => {
  setDrawer({ show: false });
}

  return (
    <section className="NavbarComponent">
      <div>
        <ButtonToolbar>
          <Button onClick={toggleOpenDrawer}>Open</Button>
        </ButtonToolbar>
        <Drawer
          show={drawer}
          onHide={toggleCloseDrawer}
        >
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            {/* <Paragraph /> */}
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={toggleCloseDrawer} appearance="primary">Confirm</Button>
            <Button onClick={toggleCloseDrawer} appearance="subtle">Cancel</Button>
          </Drawer.Footer>
        </Drawer>
      </div>


      {/* <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/forum">
          <Logo />
        </Navbar.Brand>
        <Nav className="mr-auto nav-items" >
          <MenuIcon onClick={() => setShowNav(true)} />
          <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} />
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/forum">Forum</Nav.Link>
          {document.cookie ? <Nav.Link href="/account">Account</Nav.Link> : <p></p>}
          {document.cookie ? <Nav.Link onClick={logoutUser} href="/logout">Log Out</Nav.Link> : <Nav.Link href="/login">Sign In</Nav.Link>}
          {document.cookie ? <p></p> : <Nav.Link href="/register">Sign Up</Nav.Link>}
        </Nav>
      </Navbar> */}
    </section>
  );
}

export default Navigation;