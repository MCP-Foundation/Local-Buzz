
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        // { user_id: 1, name: 'Peter Rose', username: 'PeterTheDeveloper', email: 'peterrosejr@gmail.com', password: 'hashedPassword', address: 'Brooklyn' },
        // { user_id: 2, name: 'Carmen', username: 'carms', bio:"the real shooter",email: 'carmen@gmail.com', password: 'hashedPassword', address: 'Brooklyn' },
        // { user_id: 3, name: 'Not Mark', username: 'MarkShottaz', email: 'Mark@gmail.com', password: 'hashedPassword', address: 'Brooklyn' }


        { comment_id: 3, comment: '', author: 'peterthedeveloper', user_id: 1, post_id: 1, likes: 10 }
      ]);
    });
};
