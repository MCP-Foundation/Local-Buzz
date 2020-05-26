
exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('post_id').primary();
    table.integer('user_id');
    table.foreign('user_id').references('user_id').inTable('users');
    table.string('title', 120).notNullable();
    table.string('category', 30).notNullable();
    table.string('tag', 20);
    table.string('post_body', 500);
    table.timestamp('date_created').defaultTo(knex.fn.now());
    table.string('location');
    table.integer('likes').defaultTo(0);
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('posts');
};
