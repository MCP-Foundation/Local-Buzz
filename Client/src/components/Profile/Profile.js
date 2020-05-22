import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import UserPosts from './UserPost';

class Profile extends Component {
  render() {
    return (
      <section className="ForumComponent">
        <Navigation />
        <UserPosts />
      </section>
    );
  }
}

export default Profile;
