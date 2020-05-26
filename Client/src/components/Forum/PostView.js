import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { Grommet } from 'grommet';
const theme = {
  global: {
    colors: {
      brand: '#2a48e7',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};
const postID = window.location.pathname.substring(10)
function PostView() {
	const [post, setPost] = useState(null);
	const [comments, setComments] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [postLoading, setPostLoading] = useState(false);
	const [commentLoading, setCommentLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
	    function getAllPostsData() {
	      setPostLoading(true);
	      fetch(`/api/viewPost/${postID}`)
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
			fetch(`/api/comments/${postID}`)
				.then((res) => res.json())
				.then((data) =>{
					setComments(data)
				} )
		}
	},[])
  return (
  	<section>
  	  	<Grommet theme={theme} full>
  	  	<Form id="postForm" action="/api/comment" method="post">
              <Form.Group controlId="commentForm">
                <Form.Label>Post a Comment!</Form.Label>
                <Form.Control
                  name="comment"
                  type="text"
                  id={postID}
                  placeholder="Thoughts?"
                />
                </Form.Group>
 
             </Form> 
  	</Grommet>
  		
  	</section>


  // 	 <>
  //     {isLoading ? (
  //       <p> {error || '...Loading'}</p>
  //     ) : (
  //   <section>
  //   {post && post.map((data)=>{
    	
  //   })}
  //   </section>
  // )}
  //  </>
  )
}

export default PostView;