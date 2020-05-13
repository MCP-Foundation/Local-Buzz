const db = require('../db');

class Admins {
  static create(admin_name, email, password, address) {
    const queryText = `INSERT INTO admins (admin_name, email, password, address
    VALUES ($1, $2, $3, $4);`;
    return db.query(queryText, [
      admin_name,
      email,
      password, 
      address
    ]);
  }

  static update(admin_id, admin_name, email, password, address) {
    const queryText = `UPDATE admins SET admin_name = $2, email = $3, password = $4, address = $5
      WHERE id = $1;`;
    return db.query(queryText, [
      admin_id, 
      admin_name, 
      email, 
      password, 
      address
    ]);
  }

  static deleteUser(admin_id) {
    const queryText = 'DELETE FROM admins WHERE id = $1';
    return db.query(queryText, [user_id]);
  }

  static getByEmail(email) {
    const queryText = 'SELECT * FROM admins WHERE email = $1;';
    return db.query(queryText, [email]).then((data) => data.rows[0]);
  }
}

module.exports = Admins;
