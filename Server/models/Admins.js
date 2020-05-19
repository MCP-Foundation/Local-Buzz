const db = require('../db');

class Admins {
  static create(admin_name, email, password, address) {
    const queryText = `INSERT INTO admins (admin_name, email, password, address
    VALUES ($1, $2, $3, $4);  RETURNING *;`;
    return db.query(queryText, [
      admin_name,
      email,
      password, 
      address
    ]);
  }

  static update(admin_id, admin_name, email, password, address) {
    const queryText = `UPDATE admins SET admin_name = $2, email = $3, password = $4, address = $5
      WHERE admin_id = $1 RETURNING *;`;
    return db.query(queryText, [
      admin_id, 
      admin_name, 
      email, 
      password, 
      address
    ]);
  }

  static deleteUser(admin_id) {
    const queryText = 'DELETE FROM admins WHERE admin_id = $1';
    return db.query(queryText, [user_id]);
  }

  static async getByEmail(email) {
    const queryText = 'SELECT * FROM admins WHERE email = $1;';
    const data = await db.query(queryText, [email]);
    return data.rows[0];
  }
}

export default Admins;
