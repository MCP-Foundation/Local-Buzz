import React from 'react';
import { Button } from 'antd';

function ForumHeader({ postFormRedirect }) {
  return (
    <section className="ForumHeaderComponent">
      <header>
        <h3 className="forumHeader">
          Checkout different tags and topics people are talking about
        </h3>
        <Button onClick={postFormRedirect} shape="round" size="large">
          Make a Post
        </Button>
      </header>
    </section>
  );
}

export default ForumHeader;
