import React, { useState, useEffect } from 'react';
import { Form ,Button} from 'react-bootstrap';
import { Grommet } from 'grommet';
import './PostView.css';

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
const postID = window.location.pathname.substring(10);

function PostView() {
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);
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
	          setPost(data[0]);
	        })
	        .catch(() => {
	          const err = 'Sorry there was an error, please try again';
	          setError(err);
	        });
    }
    getAllPostsData();
    setPostLoading(false);
	}, []);
	
	useEffect(()=>{
		function getAllComments(){
			setCommentLoading(true)
			fetch(`/api/comments/${postID}`)
				.then((res) => res.json())
				.then((data) =>{
					setComments(data)
				} )
		}
		getAllComments();
		setCommentLoading(false);
	},[])

	console.log(comments)

  return (
  	<section>
  	  	<Grommet theme={theme} full>
  	  		<section>
  	  			<article className="post">
  	  				<p>{post.post_body}</p>
  	  				<p>{post.category}</p>
  	  				<p>{post.tag}</p>
  	  				<p>Likes:{post.likes}</p>
  	  			</article>

  	  		</section>
	  	  	<Form id="postForm" className="commentForm"action="/api/comment" method="post">
	              <Form.Group controlId="commentForm">
	                <Form.Label className="commentInput">Post a Comment!</Form.Label>
		                <Form.Control
		                  as="textarea" 
		                  rows="4"
		                  name="comment"
		                  type="textarea"
		                  placeholder="Thoughts?"
		                  className="commentInput"
		                />
		                <Form.Control
		                  name="comment"
		                  type="hidden"
		                  value={postID}
		                  placeholder="Thoughts?"
		                  className="commentInput"
		                />
		                <Button className="commentInput" variant="primary" type="submit">
						    Comment
						</Button>
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