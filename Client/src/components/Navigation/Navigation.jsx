import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Navigation/Navigation.css';
import NavLogo from '../Logo/Logo';
import { Menu } from 'grommet';
import { Power, User, UserAdmin } from 'grommet-icons';

function Navigation() {
  function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.replace('/');
  }
  function logoutUser() {
    deleteCookie('userToken');
  }

  return (
    <section className="NavbarComponent">
      <Navbar className="navigation" collapseOnSelect expand="lg">
      {document.cookie ?        
        <Navbar.Brand href="/forum">
          <NavLogo />
        </Navbar.Brand> :
        <Navbar.Brand href="/login">
          <NavLogo />
        </Navbar.Brand>}

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="nav-items">
            <Nav.Link className="ourStory" href="/">
              Our Story
            </Nav.Link>
            {document.cookie ? (
              <Nav.Link className="buzz" href="/forum">
                Buzz
              </Nav.Link>
            ) : (
              <p className="hide"></p>
            )}
            {document.cookie ? (
              <Menu
                className="userDropdown"
                dropProps={{ align: { top: 'bottom', left: 'left' } }}
                label={<UserAdmin color="white" />}
                items={[
                  {
                    label: 'Profile',
                    icon: <User />,
                    gap: 'small',
                    onClick: () => {
                      window.location.replace('/account');
                    },
                  },
                  {
                    label: 'Logout',
                    icon: <Power />,
                    gap: 'small',
                    onClick: () => {
                      logoutUser();
                    },
                  },
                ]}
              />
            ) : (
              <Nav.Link className="nav-item" className="Login" href="/login">
                Login
              </Nav.Link>
            )}
            {document.cookie ? (
              <p className="hide"></p>
            ) : (
              <Nav.Link
                className="nav-item signup"
                className="signUp"
                href="/register"
              >
                Sign Up
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}

export default Navigation;
