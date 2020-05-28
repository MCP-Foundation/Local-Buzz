import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Grommet } from 'grommet';
import { Favorite, Chat } from 'grommet-icons';

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
  }, []);

  useEffect(() => {
    function getAllUserData() {
      fetch(`/api/user/${userID}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data[0]);
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
      <Grommet theme={theme} full>
        <section className="PostComponent">
          <div className="userAvatarDiv">
            <img
              className="userAvatar"
              alt="user avatar"
              src={userData.avatar}
            />
          </div>
          <div className="postBodyDiv">
            {/* UserInfo */}
            <div className="postUserInfo">
              <p>
                <span className="name">{userData.name}</span>
              </p>
              <p className="username">
                @
                {userData.username}
              </p>
            </div>

            {/* Post body and title */}
            <div className="mainPostDiv">
              <p className="postTitle">{postData.title}</p>
              <p className="postBody">{postData.post_body}</p>
            </div>
            {/* Category Tags  Time Created and Location */}
            <div className="postFilter">
              <p>
                <span className="tag">{postData.tag}</span>
                {' '}
                ·
                {' '}
                <span className="catagory">{postData.category}</span>
              </p>
            </div>

            <div className="postCreatedInfo">
              <p>
                <span className="time">{}</span>
                {' '}
                ·
                {' '}
                <span className="location">{postData.location}</span>
              </p>
            </div>
            {/* Likes and Comments */}

            <div className="postInteractionInfo">
              <p>
                <span className="likes">
                  {}
                  {' '}
                  <Favorite color="#ff58bc" />
                </span>

                <span className="comments">
                  {1}
                  {' '}
                  <Chat color="#57e021" />
                </span>
              </p>
            </div>
          </div>
        </section>
        );
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
        <div>
          <p />
        </div>
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
  );
}

export default PostView;
