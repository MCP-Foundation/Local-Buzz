import React from 'react';
import { Button, Main } from 'grommet';
import './HomePage.css';

function Banner({ show }) {
  return (
    <section className="BannerComponent">
      <header>
        <Main pad="large" className="bannerMain">
          <h1>Small Stories</h1>
          <p className="bannerParagraph">
            Connect with businesses on how they they have handled the current
            climate!
          </p>
        </Main>
        <Button label="Start A Conversation" size="large" onClick={show} />
      </header>
    </section>
  );
}

export default Banner;
