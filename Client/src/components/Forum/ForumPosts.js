import React, { Component } from 'react';
import Post from './Post';
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
      fetch('/api/forum').then((data) => console.log(data))
    };
    getPosts();
    return (
      <section className="ForumPostsComponent">
        <Post />
      </section>
    );
  }
}
export default ForumPosts;
