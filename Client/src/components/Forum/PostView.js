import React, { useState, useEffect } from 'react';
const postId = window.location.pathname.substring(10)

console.log(postId)
function PostView() {
	const [post, setPost] = useState(null);
	const [comments, setComments] = useState(null);
	const [postLoading, setPostLoading] = useState(false);
	const [commentLoading, setCommentLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
	    function getAllPostsData() {
	      setPostLoading(true);
	      fetch(`/api/viewPost/${postId}`)
	        .then((res) => res.json())
	        .then((data) => {
	          setPost(data);
	        })
	        .catch(() => {
	          const err = 'Sorry there was an error, please try again';
	          setError(err);
	        });
    }
    getAllPostsData();
    setPostLoading(false);
    setCommentLoading(false);
  }, []);
	useEffect(()=>{
		function getAllComments(){
			fetch(`/api/comments/${postId}`)
				.then((res) => res.json())
				.then((data) =>{
					setComments(data)
				} )
		}
	},[])
	console.log(post)
  return (
    <section>
    	<h1>Hi</h1>

     
    </section>
  );
}

export default PostView;