import React from 'react';

function PostForm() {
  return (
    <section className="PostFormComponent">
      <form id="postForm" action="/" method="">
        <fieldset>
          <label htmlFor="title">Name</label>
          <input id="title" type="title" name="title" />

          <label htmlFor="username">UserName</label>
          <input id="username" type="username" name="username" />

          <label htmlFor="username">UserName</label>
          <input id="username" type="username" name="username" />

          <label htmlFor="username">UserName</label>
          <input id="username" type="username" name="username" />

          <input type="submit" value="Log In" />
        </fieldset>
      </form>
    </section>
  );
}

export default PostForm;
