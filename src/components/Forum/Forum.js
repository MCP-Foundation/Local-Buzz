import React, { Component } from 'react';
import './Forum.css';
import Navigation from '../Navigation/Navigation';
import ForumHeader from './ForumHeader';
import SearchTags from './SearchTags';
import ForumPosts from './ForumPosts';

class Forum extends Component {
  render() {
    return (
      <section className="ForumComponent">
        <Navigation />
        <ForumHeader />
        <SearchTags />
        <ForumPosts />
      </section>
    );
  }
}

export default Forum;
