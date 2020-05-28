import React, { Component } from 'react';
import { Grommet, Main } from 'grommet';

import '../HomePage/HomePage.css';
import Navigation from '../Navigation/Navigation';
import Banner from '../HomePage/Banner';
import About from '../HomePage/About';
import Tag from '../HomePage/Tag';
const theme = {
  global: {
    colors: {
      brand: '#2a48e7',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

class HomePage extends Component {
  state = {
    tagName1: 'CovidResponse',
    tagName2: 'StartABusiness',
    tagName3: 'HelpOurEmployees',
    tagDescription1:
      'A tag where businesses are helping eachother during the covid-19 pandemic.',
    tagDescription2:
      'A tag to help aspiring business owners and entreprenuers launch their careers on the right path with the help of current business owners.',
    tagDescription3:
      'A tag to help the emoployees of non-essiential businesses during the covid-19 pandemic.',
  };
  forumPageRedirect = () => {
    window.location.href = '/forum';
  };
  render() {
    return (
      <Grommet theme={theme} full>
        <section className="HomePage">
          <section>
            <Banner forumPageRedirect={this.forumPageRedirect} />
          </section>

          <section className="HomePageAbout">
            <About />
          </section>

          <section className="HomePageTags">
            <Tag
              tagName={this.state.tagName1}
              tagDescription={this.state.tagDescription1}
            />
            <Tag
              tagName={this.state.tagName2}
              tagDescription={this.state.tagDescription2}
            />
            <Tag
              tagName={this.state.tagName3}
              tagDescription={this.state.tagDescription3}
            />
          </section>
        </section>
      </Grommet>
    );
  }
}

export default HomePage;
