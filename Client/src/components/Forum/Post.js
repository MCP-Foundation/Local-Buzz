import React, { useState, useEffect, useContext } from 'react';
// import { ProfileContext } from '../../contexts/profileContext'
import { Favorite, Chat } from 'grommet-icons';
import './Posts.css';

function Post({
  postId,
  userId,
  title,
  category,
  tag,
  postBody,
  date,
  location,
  setError,
}) {
  const d = new Date(date.replace(' ', 'T'));
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  const newDate = `${mo} ${da}, ${ye}`;
  const postDataContext = {
    postId,
    userId,
    postBody,
  };

  const simplebody = postDataContext.postBody.substring(0, 150);

  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    document.cookie
      ? fetch('/api/userObj')
          .then((res) => {
            if (res.status === 200) return res.json();
            return null;
          })
          .then((json) => setUser(json))
      : setUser(null);
  }, [setUser]);

  const viewPostRedirect = () => {
    window.location.href = `/viewPost/${postDataContext.postId}/${postDataContext.userId}`;
  };

  const likePost = async () => {
    const postLike = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (isLiked === true) {
      const req = await fetch(
        `/api/unlike/${postId}/${user.user_id}`,
        postLike
      );
      setLikes(req);
      setIsLiked(false);
    } else {
      const req = await fetch(`/api/like/${postId}/${user.user_id}`, postLike);
      setLikes(req);
      setIsLiked(true);
    }
  };

  useEffect(() => {
    function getAllUserData() {
      fetch(`/api/user/${userId}`)
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
  }, []);

  useEffect(() => {
    const getLikes = async () => {
      const req = await fetch(`/api/likes/${postId}`);
      const res = await req.json();
      setLikes(res);
      for (let i = 0; i < likes.length; i++) {
        if (likes[i].user_id === user.user_id) {
          return setIsLiked(true);
        }
      }
    };
    getLikes();
  }, [isLiked]);

  useEffect(() => {
    function getAllComments() {
      fetch(`/api/comments/${postId}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.length);
        });
    }
    getAllComments();
  }, []);

  return (
    <section className="PostComponent">
      <div className="userAvatarDiv">
        <img className="userAvatar" alt="user avatar" src={userData.avatar} />
      </div>
      <div className="postBodyDiv">
        {/* UserInfo */}
        <div className="postUserInfo">
          <p>
            <span className="name">{userData.name}</span>
          </p>
          <p className="username">@{userData.username}</p>
        </div>

        {/* Post body and title */}
        <div className="mainPostDiv" role="post" onClick={viewPostRedirect}>
          <p className="postTitle">{title}</p>
          <p className="postBody">
            {simplebody}
            ...
          </p>
        </div>
        {/* Category Tags  Time Created and Location */}
        <div className="postFilter">
          <p>
            <span className="tag">{tag}</span> ·{' '}
            <span className="catagory">{category}</span>
          </p>
        </div>

        <div className="postCreatedInfo">
          <p>
            <span className="time">{newDate}</span> ·{' '}
            <span className="location">{location}</span>
          </p>
        </div>
        {/* Likes and Comments */}

        <div className="postInteractionInfo">
          <p>
            <span className="likes" onClick={() => likePost()}>
              {likes.length} <Favorite color="#ff58bc" />
            </span>

            <span className="comments">
              {comments} <Chat color="#57e021" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Post;
