import React from 'react';

function Post({
  title, category, tag, postBody, date,
}) {
  return (
    <section className="PostComponent">
      <div className="UserAvatarDiv">
        <img
          src="https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png"
          alt="profile"
        />
      </div>

      <div className="postUserInfo">
        <div>
          <h1 className="username">{}</h1>
        </div>
        <div>
          <p>{date}</p>
        </div>
      </div>

      <div className="mainPostBody">
        <div className="postTitle">
          <p className="postTitle">{title}</p>
        </div>
        <div className="postBody">
          <p className="postBody">{postBody}</p>
        </div>
      </div>

      <div className="postCatagory">
        <p className="category">{category}</p>
      </div>
      <div>
        <p className="tag">
          #
          {tag}
        </p>
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
