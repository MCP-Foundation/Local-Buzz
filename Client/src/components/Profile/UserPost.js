import React, { useState, useEffect } from 'react';

import { Timeline, Row, Col } from 'antd';

import Post from '../Forum/Post';

function UserPosts() {
  const [allPosts, setAllPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getAllUserPostsData() {
      setIsLoading(true);
      fetch(`/api/user-posts`)
        .then((res) => res.json())
        .then((data) => {
          setAllPosts(data);
        })
        .catch(() => {
          const err = 'Sorry there was an error, please try again';
          setError(err);
        });
    }

    getAllUserPostsData();
    setIsLoading(false);
  }, []);
  console.log(allPosts);

  return (
    <>
      {isLoading ? (
        <p> {error || '...Loading'}</p>
      ) : (
        <Row justify="center">
          <Col span={8}></Col>
          <Col span={8}>
            <section className="ForumPostsComponent">
              <Timeline mode="left">
                {allPosts &&
                  allPosts.map((post) => (
                    <Post
                      title={post.title}
                      category={post.category}
                      tag={post.tag}
                      postBody={post.post_body}
                      date={post.date_created}
                    />
                  ))}
              </Timeline>
            </section>
          </Col>

          <Col span={8}></Col>
        </Row>
      )}
    </>
  );
}
export default UserPosts;
