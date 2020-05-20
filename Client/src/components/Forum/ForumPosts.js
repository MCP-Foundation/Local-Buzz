import React, { useState, useEffect } from 'react';

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
  console.log(allPosts);

  return (
    <>
      {isLoading ? (
        <p>
          {' '}
          {error || '...Loading'}
        </p>
      ) : (
        <section className="ForumPostsComponent">
          {allPosts
            && allPosts.map((post) => (
              <Post
                title={post.title}
                category={post.category}
                tag={post.tag}
                postBody={post.post_body}
                date={post.date_created}
              />
            ))}
        </section>
      )}
    </>
  );
}
export default ForumPosts;
