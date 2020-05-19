import React from 'react';

function Post({ data }) {
  console.log(data);
  return (
    <section className="PostComponent">
      <div className="UserAvatarDiv">
        <img src="#" alt="profile" />
      </div>

      <div className="postUserInfo">
        <div>
          <h1 className="name">{}</h1>
        </div>

        <div>
          <p />
        </div>
        <div>
          <p />
        </div>
      </div>

      <div className="mainPostBody">
        <div className="postTitle">
          <p className="postTitle" />
        </div>
        <div className="postBody">
          <p className="postBody" />
        </div>
      </div>

      <div className="postCatagory">
        <p className="catagory" />
      </div>
      <div>
        <p className="tag">#</p>
      </div>

      <div className="postInteraction">
        <div>
          <p className="likes">
            {}
            likes
          </p>
        </div>
        <div>
          <p className="comments">
            {}
            comments
          </p>
        </div>
      </div>
    </section>
  );
}

export default Post;
