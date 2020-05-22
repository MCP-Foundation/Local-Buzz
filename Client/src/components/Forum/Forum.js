import React, { Component } from 'react';

import './Forum.css';
import Navigation from '../Navigation/Navigation';
import ForumHeader from './ForumHeader';
import SearchTags from './SearchTags';
import ForumPosts from './ForumPosts';

class Forum extends Component {
  postFormRedirect = () => {
    window.location.href = '/post';
  };

  render() {
    return (
      <section className="ForumComponent">
        <Navigation />
        <ForumHeader postFormRedirect={this.postFormRedirect} />
        <SearchTags />
        <ForumPosts getAllPostsData={this.getAllPostsData} />
      </section>
    );
  }
}

export default Forum;
