import React from 'react';
import { Button, Main } from 'grommet';
import './HomePage.css';
import { Link } from 'react-router-dom';
import logo from '../Logo/localbuzzYellow.png';


function Banner({}) {
  return (
    <section className="BannerComponent">
      <header className="bannerMain">
        <Main pad="large">
          <img className="bannerLogo" src={logo} />

          <p className="bannerParagraph">
            Connect with businesses on how they have handled the current
            climate!
          </p>
        </Main>

        {document.cookie ? (
          <Link to="/forum" replace>
            <Button label="Start A Conversation" size="large" />
          </Link>
        ) : (
          <Link to="/login" replace>
            <Button label="Join The Conversation" size="large" />
          </Link>
        )}
      </header>
    </section>
  );
}

export default Banner;
