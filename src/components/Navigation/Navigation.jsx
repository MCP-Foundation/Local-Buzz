import React from 'react';
import '../Navigation/Navigation.css';

import Logo from '../Logo';

function Navigation() {
  return (
    <section className="navigationComponent">
      <nav>
        <Logo />
        <ol>
          <li>
            <a href="/">Home</a>{' '}
          </li>
          <li>
            <a href="/">Forum</a>{' '}
          </li>
          <li>
            <a href="/">Account</a>{' '}
          </li>
          <li>
            <a href="/">Sign In</a>{' '}
          </li>
          <li>
            <a href="/">Sign Up</a>{' '}
          </li>
        </ol>
      </nav>
    </section>
  );
}

export default Navigation;
