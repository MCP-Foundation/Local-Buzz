import React from 'react';
import { Favorite, Chat } from 'grommet-icons';
import './Posts.css';

function UserPost({
  avatar,
  name,
  username,
  title,
  postBody,
  tag,
  category,
  location,
  likes,
  comments,
  date,
}) {
  return (
    <section className="PostComponent">
      <div className="userAvatarDiv">
        <img className="userAvatar" alt="user avatar" src={avatar} />
      </div>
      <div className="postBodyDiv">
        {/* UserInfo */}
        <div className="postUserInfo">
          <p>
            <span className="name">{name}</span>
          </p>
          <p className="username">
            @
            {username}
          </p>
        </div>

        {/* Post body and title */}
        <div className="mainPostDiv">
          <p className="postTitle">{title}</p>
          <p className="postBody">{postBody}</p>
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
            <span className="time">{date}</span>
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
              {comments}
              {' '}
              <Chat color="#57e021" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserPost;
