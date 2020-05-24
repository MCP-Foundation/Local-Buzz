import React, { useState, useEffect } from 'react';

function PostView() {
	// const [Post, setPost] = useState(null);
	// const [comments, setComments] = useState(null);
	// const [PostLoading, setPostLoading] = useState(false);
	// const [CommentLoading, setCommentLoading] = useState(false);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	//     function getAllPostsData() {
	//       setPostLoading(true);
	//       fetch(`api/viewPost/1`)
	//         .then((res) => res.json())
	//         .then((data) => {
	//           setPost(data);
	//         })
	//         .catch(() => {
	//           const err = 'Sorry there was an error, please try again';
	//           setError(err);
	//         });
 //    }
 //    function getPostComments() {
 //    setCommentLoading(true)
 //      fetch(`api/viewPost/1`)
 //      	.then(`api/`)
 //      	.then((res) => res.json())
 //      	.then((data) => {
 //      		setComments(data);
 //      	})
 //      	.catch(()=>{
 //      		const err = 'Sorry there was an error,please try again';
 //      		setError(err)
 //      	});

 //    }
 //    getPostComments()
 //    getAllPostsData();
 //    setPostLoading(false);
 //    setCommentLoading(false);
 //  }, []);
  return (
    <section>
    	<h1>Hi</h1>

     
    </section>
  );
}

export default PostView;