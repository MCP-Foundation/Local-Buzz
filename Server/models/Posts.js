const db = require('../db');

class Posts {
  static create(
    user_id,
    title,
    category,
    tag,
    post_body,
    date_created,
    location
  ) {
    const queryText = `INSERT INTO posts (user_id, title, category, tag, post_body, date_created, location)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
    return db.query(queryText, [
      user_id,
      title,
      category,
      tag,
      post_body,
      date_created,
      location,
    ]);
  }

  static update(
    user_id,
    title,
    category,
    tag,
    post_body,
    date_created,
    location
  ) {
    const queryText =
      'UPDATE posts SET title = $2, category = $3, tag = $4, post_body = $5, date_created = $6, location = $7 WHERE user_id = $1 RETURNING *;';
    return db.query(queryText, [
      user_id,
      title,
      category,
      tag,
      post_body,
      date_created,
      location,
    ]);
  }

  static delete(post_id) {
    const queryText = 'DELETE FROM posts WHERE post_id = $1 RETURNING *;';
    return db.query(queryText, [post_id]);
  }
  static getAllByUser (userId) {
    const queryText = 'SELECT * FROM posts WHERE user_id=$1;';
    return db.query(queryText, [userId]).then(response => response.rows)
  }

  static getById(post_id) {
    const queryText = 'SELECT * FROM posts WHERE post_id = $1 RETURNING *;';
    return db.query(queryText, [post_id]);
  }

  static getAll() {
    const queryText = 'SELECT * FROM posts;';
    return db.query(queryText).then((data) => data.rows);
  }
  static createComment(userID,author,postID,comment){
    const queryText = `INSERT INTO comments (comment, author, user_id, post_id)
    VALUES ($1, $2, $3, $4) RETURNING *;`
    return db.query(queryText,[comment,author,userID,postID])

  }
  static getComments(){
    const queryText = `SELECT * FROM comments RETURNING *;`;
    return db.query(queryText).then((data) => data.rows)

  }
}

module.exports = Posts;
