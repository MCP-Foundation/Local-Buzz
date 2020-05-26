
exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('comment_id').primary();
    table.string('comment', 255);
    table.string('author').notNullable()
    table.foreign('author').references('username').inTable('users');
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('user_id').inTable('users')
    table.integer('post_id').notNullable()
    table.foreign('post_id').references('post_id').inTable('posts')
    table.timestamp('date_created').defaultTo(knex.fn.now())
    table.integer('likes').defaultTo(0)
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('comments');
};
