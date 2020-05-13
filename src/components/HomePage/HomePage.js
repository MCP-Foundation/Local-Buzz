import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Banner from '../HomePage/Banner';

class HomePage extends Component {
  render() {
    return (
      <section className="HomePage">
        <Navigation />
        <Banner />
      </section>
    );
  }
}

export default HomePage;
