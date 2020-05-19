import React from 'react';
import Post from './Post';
<<<<<<< HEAD:src/components/Forum/ForumPosts.js

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
=======
class ForumPosts extends Component {
  render() {
    // const requestMethod = async (method, url, data) => {
    //   fetch(url, {
    //     method,
    //     body: JSON.stringify(data),
    //     headers: data ? { 'Content-Type': 'application/json' } : {},
    //   }).then((response) => {
    //     if (response.status >= 400) {
    //       return response.json().catch((err) => {
    //         const error = new Error('Something went wrong');
    //         error.data = err;
    //         throw error;
    //       });
    //     }
    //     return response;
    //   });
    // };
    const getPosts =  () => {
      fetch('/api/forum').then((data) => data.json()).then((info) => console.log(info))
    };
    getPosts();
    return (
      <section className="ForumPostsComponent">
        <Post />
      </section>
    );
  }
>>>>>>> 2dfd849f3b1bb4541ccbb82755fd48fc238b3f78:Client/src/components/Forum/ForumPosts.js
}
export default ForumPosts;
