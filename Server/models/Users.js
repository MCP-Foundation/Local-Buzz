const db = require('../db');
class User {
  static create(name, username, bio, email, password, address, avatar) {
    const queryText = `INSERT INTO users (name, username, bio, email, password, address, avatar)
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    return db.query(queryText, [
      name,
      username,
      bio,
      email,
      password,
      address,
      avatar,
    ]);
  }
  static getByID(userID) {
    const queryText = 'SELECT * FROM users WHERE user_id = $1';
    return db.query(queryText, [userID]).then((data) => data.rows[0]);
  }
  static getByEmail(email) {
    const queryText = 'SELECT * FROM users WHERE email = $1;';
    return db.query(queryText, [email]).then((data) => data.rows[0]);
  }
  static getAll() {
    const queryText = 'SELECT * FROM users;';
    return db.query(queryText).then((data) => data.rows);
  }
  static update(userID, name, username, email, password, address, bio) {
    const queryText = `UPDATE users SET name = $2, username = $3, email = $4, password = $5, address = $6 bio = $7 avatar = $8
      WHERE user_id = $1;`;
    return db.query(queryText, [
      userID,
      name,
      username,
      email,
      password,
      address,
      bio,
      avatar,
    ]);
  }
  static deleteUser(userID) {
    const queryText = 'DELETE FROM users WHERE user_id = $1';
    return db.query(queryText, [userID]);
  }
}
module.exports = User;
