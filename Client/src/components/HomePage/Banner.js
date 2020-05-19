import React from 'react';

function Banner() {
  return (
    <section className="BannerComponent">
      <header>
        <h2 className="hero">
          Connect with businesses on how they they have handled the current climate!
        </h2>
        <button className="bannerButton" type="button" href="/forum">
          Forum
        </button>
      </header>
    </section>
  );
}

export default Banner;
