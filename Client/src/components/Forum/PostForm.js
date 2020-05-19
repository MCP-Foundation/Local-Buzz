import React from 'react';

function PostForm() {
  return (
    <section className="PostFormComponent">
      <form id="postForm" action="/api/posts" method="post">
        <fieldset>
          <label htmlFor="title">Title</label>
          <input id="title" type="title" name="title" />

          <label htmlFor="category">Category</label>
          <input id="category" type="category" name="category" />

          <label htmlFor="tag">Tag</label>
          <input id="tag" type="tag" name="tag" />

          <label htmlFor="postBody">Post</label>
          <input id="postBody" type="postBody" name="postBody" />

          <label htmlFor="address">Borough</label>
          <select id="address" name="address">
            <option value="BX">Bronx</option>
            <option value="BK">Brooklyn</option>
            <option value="MN">Manhattan</option>
            <option value="QN">Queens</option>
            <option value="SI">Staten Island</option>
          </select>

          <input type="submit" value="Create Post" />
        </fieldset>
      </form>
    </section>
  );
}

export default PostForm;
