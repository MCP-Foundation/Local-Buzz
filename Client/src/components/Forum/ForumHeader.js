import React from 'react';

function ForumHeader({ postFormRedirect }) {
  return (
    <section className="ForumHeaderComponent">
      <header>
        <h3 className="forumHeader">
          Checkout different tags and topics people are talking about
        </h3>
        <button type="button" onClick={postFormRedirect}>
          Make a Post
        </button>
      </header>
    </section>
  );
}

export default ForumHeader;
