import React, { Component } from 'react';
import '../Forum/Forum.css';
import Navigation from '../Navigation/Navigation';
import ForumHeader from '../Forum/ForumHeader';
import SearchTags from '../Forum/SearchTags';
import ForumPosts from '../Forum/ForumPosts';

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
