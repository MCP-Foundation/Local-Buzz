
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
          { comment_id: 1, comment:'', author:'peterthedeveloper', user_id: 1, post_id: 1, likes: 10 }

    //         table.increments('comment_id').primary();
    //   table.string('comment', 255);
    //   table.string('author').notNullable()
    //   // table.foreign('author').references('username').inTable('users');
    //   table.integer('user_id').notNullable()
    //   // table.foreign('user_id').references('user_id').inTable('users')
    //   table.integer('post_id').notNullable()
    //   // table.foreign('post_id').references('post_id').inTable('posts')
    //   table.timestamp('date_created').defaultTo(knex.fn.now())
    //   table.integer('likes').defaultTo(0)
      ]);
    });
};
