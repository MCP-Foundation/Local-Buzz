import React from 'react';

function PostForm() {
  return (
    <section className="PostFormComponent">
      <form id="loginForm" action="/login" method="post">
        <fieldset>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />

          <input type="submit" value="Log In" />
        </fieldset>
      </form>
    </section>
  );
}

export default PostForm;
