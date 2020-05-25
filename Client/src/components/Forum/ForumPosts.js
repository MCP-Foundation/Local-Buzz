import React, { useState, useEffect } from 'react';
import { Timeline, Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Post from './Post';

function ForumPosts() {
  const [allPosts, setAllPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getAllPostsData() {
      setIsLoading(true);
      fetch('/api/forum')
        .then((res) => res.json())
        .then((data) => {
          setAllPosts(data);
        })
        .catch(() => {
          const err = 'Sorry there was an error, please try again';
          setError(err);
        });
    }

    getAllPostsData();
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <p> {error || '...Loading'}</p>
      ) : (
        <section className="ForumPostComponent">
          <Row justify="center">
            <Col span={8}></Col>
            <Col span={8}>
              <section className="ForumPostsComponent">
                <Timeline mode="left">
                  {allPosts &&
                    allPosts.map((post) => (
                      <Post
                        postId={post.post_id}
                        userId={post.user_id}
                        title={post.title}
                        category={post.category}
                        tag={post.tag}
                        postBody={post.post_body}
                        date={post.date_created}
                        location={post.location}
                      />
                    ))}
                </Timeline>
              </section>
            </Col>

            <Col span={8}></Col>
          </Row>
        </section>
      )}
    </>
  );
}
export default ForumPosts;
