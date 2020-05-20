import React from 'react';
import './Forum.css';

function PostForm() {
  return (
    <section className="PostFormComponent">
      <form id="postForm" action="/api/posts" method="post">
        <fieldset>
          <label htmlFor="title">
            Post Title
            <input id="title" type="text" name="title" />
          </label>

          <label htmlFor="category">
            Category
            <input id="category" type="text" name="category" />
          </label>

          <label htmlFor="tag">
            #Tag?
            <input id="tag" type="text" name="tag" />
          </label>
          <label htmlFor="postBody">
            What's on your mind?
            <textarea id="postBody" name="postBody" />
          </label>
          <label htmlFor="address">
            Borough
            <select id="address" name="address">
              <option value="BX">Bronx</option>
              <option value="BK">Brooklyn</option>
              <option value="MN">Manhattan</option>
              <option value="QN">Queens</option>
              <option value="SI">Staten Island</option>
            </select>
          </label>

          <input type="submit" value="Create Post" />
        </fieldset>
      </form>
    </section>
  );
}

export default PostForm;
