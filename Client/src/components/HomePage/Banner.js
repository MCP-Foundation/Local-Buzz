import React from 'react';
import { Button, Main } from 'grommet';
import './HomePage.css';

function Banner({ forumPageRedirect }) {
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
        <Button
          label="Join the conversation"
          size="large"
          onClick={forumPageRedirect}
        />
      </header>
    </section>
  );
}

export default Banner;
