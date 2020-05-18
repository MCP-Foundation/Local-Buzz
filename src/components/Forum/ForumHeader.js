import React from 'react';
import PostForm from './PostForm';

function Forum() {
  return (
    <section className="ForumHeaderComponent">
      <header>
        <h3 className="forumHeeader">
          Checkout different tags and topics people are talking about
        </h3>
        <PostForm />
      </header>
    </section>
  );
}

export default Forum;
