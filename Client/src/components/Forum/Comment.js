import React, { useState, useEffect } from 'react';
import { Favorite } from 'grommet-icons';

function Comment({
  userID, comment, date, likes,
}) {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const d = new Date(date.replace(' ', 'T'));
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  const newDate = `${mo} ${da}, ${ye}`;

  useEffect(() => {
    function getUserData() {
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

    getUserData();
  }, []);

  return (
    <section className="CommentComponent">
      <div className="userAvatarDiv">
        <img className="userAvatar" alt="user avatar" src={userData.avatar} />
      </div>
      <div className="mainCommentDiv">
        <div className="commentUserInfo">
          <p>
            <span className="name">{userData.name}</span>
            <span className="username">
              @
              {userData.username}
            </span>
          </p>
        </div>
        <div className="commentUserInfo">
          <p className="comment">{comment}</p>
        </div>
        <div className="commentInteraction">
          <span className="likes">
            {likes}
            {' '}
            <Favorite color="#ff58bc" />
          </span>
        </div>
        <div className="postCreatedInfo">
          <p>
            <span className="time">{newDate}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Comment;
