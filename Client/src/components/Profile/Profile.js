import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import UserPosts from './UserPost';
import Introduction from './Introduction';
import './Profile.css';
import 'sanitize.css';

class Profile extends Component {
  render() {
    return (
      <section className="ProfileComponent">
        <Introduction />
        <UserPosts />
      </section>
    );
  }
}

export default Profile;
