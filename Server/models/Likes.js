const db = require('../db');

class Likes {
  static add(userId, postId) {
    const queryText = 'INSERT INTO likes (user_id, post_id) VALUES ($1, $2);';
    return db.query(queryText, [userId, postId]).then((res) => res.rows);
  }

  static remove(userId, postId) {
    const queryText = 'DELETE FROM likes WHERE user_id = $1 AND post_id = $2;';
    return db.query(queryText, [userId, postId]).then((res) => res.rows);
  }

  static getByPostId(postId) {
    const queryText = 'SELECT * FROM likes WHERE post_id=$1;';
    return db.query(queryText, [postId]).then((res) => res.rows);
  }
}
module.exports = Likes;
