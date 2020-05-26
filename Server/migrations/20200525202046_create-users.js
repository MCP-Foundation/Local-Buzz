
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary();
    table.string('avatar', 80);
    table.string('name', 100);
    table.string('username').unique().notNullable();
    table.string('bio', 500);
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('address').notNullable();
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('users');
};
