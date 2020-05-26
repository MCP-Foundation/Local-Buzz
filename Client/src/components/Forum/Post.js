import React from 'react';
import { Favorite, Chat } from 'grommet-icons';

function Post({
  postId,
  userId,
  title,
  category,
  tag,
  postBody,
  date,
  location,
  likes,
}) {
  const d = new Date(date.replace(' ', 'T'));
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  const newDate = `${mo} ${da}, ${ye}`;
  const postDataContext = {
    postId,
    postBody,
  };

  const simplebody = postDataContext.postBody.substring(0, 150)

  const viewPostRedirect = (postId) => {
    window.location.href = `/viewPost/${postDataContext.postId}`;
  };

  return (
    <section className="PostComponent" onClick={viewPostRedirect}>
      <div className="userAvatarDiv">
        <img
          className="userAvatar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
        />
      </div>
      <div className="postBodyDiv">
        {/* UserInfo */}
        <div className="postUserInfo">
          <p>
            <span className="name">Name</span>
          </p>
          <p className="username">@username</p>
        </div>

        {/* Post body and title */}
        <div className="mainPostDiv">
          <p className="postTitle">{title}</p>
          <p className="postBody">{simplebody}...</p>
        </div>
        {/* Category Tags  Time Created and Location */}
        <div className="postFilter">
          <p>
            <span className="tag">{tag}</span>
            {' '}
            ·
            {' '}
            <span className="catagory">{category}</span>
          </p>
        </div>

        <div className="postCreatedInfo">
          <p>
            <span className="time">{newDate}</span>
            {' '}
            ·
            {' '}
            <span className="location">{location}</span>
          </p>
        </div>
        {/* Likes and Comments */}

        <div className="postInteractionInfo">
          <p>
            <span className="likes">
              {likes}
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
}

export default Post;