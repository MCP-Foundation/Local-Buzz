const db = require('../db')

class User {
  static create(name, username, email, password, address) {
    const queryText = `INSERT INTO users (name, username, email, password, address)
    VALUES ($1, $2, $3, $4, $5);`;
    return query(queryText, [
      name, 
      username, 
      email, 
      password, 
      address
    ]);
  }

  static update(user_id, name, username, email, password, address) {
    const queryText = `UPDATE users SET name = $2, username = $3, email = $4, password = $5, address = $6
      WHERE user_id = $1;`;
    return query(queryText, [
      user_id,
      name, 
      username, 
      email, 
      password, 
      address
    ]);
  }

  static deleteUser(user_id) {
    const queryText = 'DELETE FROM users WHERE user_id = $1';
    return query(queryText, [user_id]);
  }

  static getByEmail(email) {
    const queryText = 'SELECT * FROM users WHERE email = $1;';
    return query(queryText, [email]).then((data) => data.rows[0]);
  }
  static getAll() {
    const queryText = 'SELECT * FROM users;';
    return query(queryText)
  }
}

module.exports = User;