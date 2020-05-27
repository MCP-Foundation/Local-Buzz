
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        // { post_id: 1,
        //   user_id: 2,
        //   title:'Starting a business at a young age.',
        //   category:'#ThisCategory',
        //   tag:'#SmallBusiness',
        //   post_body: 'Body',
        //   location: 'Brookyln',
        //   likes: 23
        // }

        { comment_id: 2, comment: '', author: 'peterthedeveloper', user_id: 1, post_id: 1, likes: 10 }


      ]);
    });
};
