import React from 'react';

function Post() {
  return (
    <section className="PostComponent">
      <div className="UserAvatarDiv">
        <img src="#" />
      </div>
      <div className="postUserInfo">
        <div>
          <h1 className="name">{}</h1>
        </div>
        <div>
          <h1 className="Username">{}</h1>
        </div>
        <div>
          <p className="timePosted">{}</p>
        </div>
      </div>
      <div className="postCatagory">
        <p className="catagory">{}</p>
      </div>
      <div className="MainPost">
        <p className="postTitle">{}</p>
      </div>
      <div className="postInteraction">
        <div>
          <p className="likes">{}likes</p>
        </div>
        <div>
          <p className="comments">{}comments</p>
        </div>
      </div>
    </section>
  );
}

export default Post;
