import React, { useState, useEffect } from 'react';

import Post from '../Forum/Post';

import './Profile.css';

function UserPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    function getAllUserPostsData() {
      setIsLoading(true);
      fetch('/api/user-posts')
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

  return (
    <section className="UserPostComponent">
      <>
        <section>
          <p className="userPostsTitle">Converstations You've Started</p>
        </section>
        {isLoading ? (
          <p> {error || '...Loading'}</p>
        ) : (
          <section className="ProfilePostsComponent">
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
                  likes={post.likes}
                  setIsLoading={setIsLoading}
                  setError={setError}
                />
              ))}
          </section>
        )}
      </>
    </section>
  );
}
export default UserPosts;
