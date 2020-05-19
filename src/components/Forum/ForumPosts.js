import React from 'react';
import Post from './Post';

function ForumPosts() {
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
  return <section className="ForumPostsComponent"></section>;
}
export default ForumPosts;
