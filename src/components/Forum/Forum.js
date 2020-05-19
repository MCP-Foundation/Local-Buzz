import React, { Component } from 'react';
import './Forum.css';
import Navigation from '../Navigation/Navigation';
import ForumHeader from './ForumHeader';
import SearchTags from './SearchTags';
import ForumPosts from './ForumPosts';

class Forum extends Component {
  getAllPostsData = () => {
    const data = {
      data: [
        {
          id: 1,
          user_id: 2,
          title: 'sbnm',
          category: 'cxvbnm,',
          tag: 'czxvcbnbmn',
          post_body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          date_created: '2020-05-18T03:39:18.358Z',
          location: 'QN',
        },
        {
          id: 2,
          user_id: 3,
          title: '34he5jrymt',
          category: 't4y56rjytu',
          tag: 't4e5hjr',
          post_body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          date_created: '2020-05-18T03:41:03.015Z',
          location: 'MN',
        },
        {
          id: 3,
          user_id: 8,
          title: '3ghetrymt',
          category: 'thetjrytu',
          tag: 'hetrjytu',
          post_body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          date_created: '2020-05-18T03:41:48.225Z',
          location: 'SI',
        },
      ],
    };

    let dataset = data.data.map((post) => {
      return {
        title: post.title,
        category: post.category,
        tag: post.tag,
        post_body: post.post_body,
        date_created: post.date_created,
        location: post.location,
      };
    });
    return dataset;
  };

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
