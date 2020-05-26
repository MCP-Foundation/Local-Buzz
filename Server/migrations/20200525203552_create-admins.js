
exports.up = function(knex) {
  return knex.schema.createTable('admins', (table) => {
    table.increments('admin_id').primary();
    table.string('admin_name', 30);
    table.string('email', 30);
    table.string('password').unique();
    table.string('address');
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('admins');
};
