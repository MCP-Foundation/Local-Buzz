import React, { Component } from 'react';
import { Grommet } from 'grommet';
import { Row, Col } from 'antd';

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
          <Navigation />
          <Row justify="center">
            <Col span={8}></Col>
            <Col span={8}>
              <Banner forumPageRedirect={this.forumPageRedirect} />
            </Col>
            <Col span={8}></Col>
          </Row>
          <Row justify="center">
            <Col span={12}>
              <About />
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
        </section>
      </Grommet>
    );
  }
}

export default HomePage;
