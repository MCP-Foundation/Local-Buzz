import React, { useState, useEffect,useContext } from 'react';
import Post from './Post';
import { TagContext } from '../../contexts/tagContext'

function ForumPosts() {
  const [tag, setTag ] = useContext(TagContext)
  const [filteredPosts, setFilteredPosts] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
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
  useEffect(()=>{
    function filter(){
    console.log(allPosts)
    console.log(allPosts.filter((post) => post.tag === "#GasMeUp"))
  
  }
  filter()
  },[tag])


  return (
   <>
      {isLoading ? (
        <p>
          {' '}
          {error || '...Loading'}
        </p>
      ) : (
        <section className="ForumPostComponent">
          <section className="ForumPostsComponent">
            {
            filteredPosts ?
                filteredPosts
                && filteredPosts.map((post) => (
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
                )) : 
                allPosts
                && allPosts.map((post) => (
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
        </section>
      )}
    </>
  );
}
export default ForumPosts;
