import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Grommet } from 'grommet';
import Comment from './Comment';
import UserPost from './UserPost';
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

const params = window.location.pathname.split('/');
const postID = params[2];
const userID = params[3];

function PostView() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    function getPostData() {
      setPostLoading(true);
      fetch(`/api/viewPost/${postID}/${userID}`)
        .then((res) => res.json())
        .then((data) => {
          setPostData(data[0]);
        })
        .catch(() => {
          const err = 'Sorry there was an error, please try again';
          setError(err);
        });
    }
    getPostData();
    setPostLoading(false);
  }, []);
  useEffect(() => {
    function getAllComments() {
      setCommentLoading(true);
      fetch(`/api/comments/${postID}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data);
        });
    }
    getAllComments();
    setCommentLoading(false);
  }, [setComments]);

  useEffect(() => {
    function getAllUserData() {
      fetch(`/api/user/${userID}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        })
        .catch(() => {
          const err = 'Sorry there was an error, please try again';
          setError(err);
        });
    }
    getAllUserData();
    setIsLoading(false);
  }, []);

  return (
    <section>
      <UserPost
        avatar={userData.avatar}
        name={userData.name}
        username={userData.username}
        title={postData.title}
        postBody={postData.post_body}
        tag={postData.tag}
        category={postData.category}
        location={postData.location}
        likes={postData.likes}
        comments={comments.length}
        date={postData.date_created}
      />
      <Form
        id="postForm"
        className="commentForm"
        action="/api/comment"
        method="post"
      >
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
      <section className="postCommentsSection">
        <div />
        <div className="mainCommentDiv">
          {(comments.length
            && comments.map((comment) => (
              <Comment
                userID={comment.user_id}
                comment={comment.comment}
                date={comment.date_created}
                likes={comment.likes}
              />
            ))) || <p>There aren't any comments yet :(</p>}
        </div>
        <div />
      </section>
    </section>
  );
}

export default PostView;
