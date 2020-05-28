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
    return db.query(queryText, [userID]).then(res => res.rows)
  }
  static getUserLikedPosts(userID){
    const queryText = 'SELECT * FROM likes WHERE user_id = $1';
    const data = db.query(queryText,[userID]).then((res )=> res.rows[0].post_id)
    return data.then((postID) => db.query('SELECT * FROM posts WHERE user_id = $1 AND post_id = $2',[userID,postID]))
     .then(res => res.rows)
  }

  static getByID(postID) {
    const queryText = 'SELECT * FROM posts WHERE post_id = $1;';
    return db.query(queryText, [postID]).then((res) => res.rows);
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

  static delete(postID,userID) {
    const queryText = 'DELETE FROM posts WHERE post_id = $1 RETURNING *;';
    return db.query(queryText, [postID]);
  }
  static createComment(userID,author,postID,comment,date){
    const queryText = `INSERT INTO comments (comment, author, user_id, post_id,date_created)
    VALUES ($1, $2, $3, $4,$5) RETURNING *;`
    return db.query(queryText,[comment,author,userID,postID,date])

  }
  static getComments(postID){
    const queryText = `SELECT * FROM comments WHERE post_id = $1`;
    return db.query(queryText,[postID]).then((data) => data.rows)

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
