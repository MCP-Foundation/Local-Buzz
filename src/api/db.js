const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://Peter@localhost:8000/smallstories'
  // user: 'Peter',
  // host: '/tmp',
  // database: 'smallstories',
  // port: 8000,
});

module.exports = {
  query(text, params) {
    return pool.query(text, params);
  },
};