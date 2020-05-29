import React, { Component } from 'react';

import '../HomePage/HomePage.css';
import Banner from '../HomePage/Banner';
import About from '../HomePage/About';
import Tag from '../HomePage/Tag';
import Footer from '../Footer/Footer';

class HomePage extends Component {
  state = {
    tagName1: 'CovidResponse',
    tagName2: 'StartABusiness',
    tagName3: 'HelpOurEmployees',
    tagDescription1:
      'A tag where businesses are helping each other during the COVID-19 pandemic.',
    tagDescription2:
      'A tag to help aspiring business owners and entrepreneurs launch their careers on the right path with the help of current business owners.',
    tagDescription3:
      'A tag to help the employees of non-essential businesses during the COVID-19 pandemic.',
  };
  forumPageRedirect = () => {
    window.location.href = '/forum';
  };
  render() {
    return (
      <section className="HomePage">
        <Banner forumPageRedirect={this.forumPageRedirect} />
        <section className="aboutSection">
          <section className="HomePageAbout">
            <About />
          </section>

          <section className="HomePageTags">
            <Tag
              tagName={this.state.tagName1}
              tagDescription={this.state.tagDescription1}
              tagIcon={
                'https://image.flaticon.com/icons/png/512/204/204245.png'
              }
            />
            <Tag
              tagName={this.state.tagName2}
              tagDescription={this.state.tagDescription2}
              tagIcon={
                'https://www.shareicon.net/data/512x512/2016/06/30/788775_food_512x512.png'
              }
            />
            <Tag
              tagName={this.state.tagName3}
              tagDescription={this.state.tagDescription3}
              tagIcon={
                'https://image.flaticon.com/icons/png/512/426/426375.png'
              }
            />
          </section>
          <Footer />
        </section>
      </section>
    );
  }
}

export default HomePage;
