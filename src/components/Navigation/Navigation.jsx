import React from 'react';
import '../Navigation/Navigation.css';

import Logo from '../Logo';

function Navigation() {
  return (
    <section className="NavigationComponent">
      <nav>
        <Logo />
        <ol>
          <li className="navTab" className="navTab">
            <a href="/">Home</a>{' '}
          </li>
          <li className="navTab">
            <a href="/">Forum</a>{' '}
          </li>
          <li className="navTab">
            <a href="/">Account</a>{' '}
          </li>
          <li className="navTab">
            <a href="/">Sign In</a>{' '}
          </li>
          <li className="navTab">
            <a href="/">Sign Up</a>{' '}
          </li>
        </ol>
      </nav>
    </section>
  );
}

export default Navigation;
