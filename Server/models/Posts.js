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
  static getAllByUser (userID) {
    const queryText = 'SELECT * FROM posts WHERE user_id = $1;';
    return db.query(queryText, [userID]).then(response => response.rows)
  }

  static getById(postID) {
    const queryText = 'SELECT * FROM posts WHERE post_id = $1 RETURNING *;';
    return db.query(queryText, [postID]);
  }

  static getAll() {
    const queryText = 'SELECT * FROM posts;';
    return db.query(queryText).then((data) => data.rows);
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
  static addLike(postID){
    const queryText = `UPDATE posts SET likes = likes +1 WHERE post_id =$1`
    return db.query(queryText,[postID]);
  }

  static delete(postID,userID) {
    const queryText = 'DELETE FROM posts WHERE post_id = $1 RETURNING *;';
    return db.query(queryText, [postID]);
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
  static updateComment(userID,commentID,comment){
    const queryText = `UPDATE comments SET comment = $1 WHERE user_id = $2 AND commentID = $3 *;`;
    return db.query(queryText,[comment,userID,postID])
  }
  static deleteComment(userID,postID){
    const queryText = 'DELETE FROM comments WHERE post_id = $1 AND user_id = $2;';
    return db.query(queryText, [postID,userID]);

  }
}

module.exports = Posts;
