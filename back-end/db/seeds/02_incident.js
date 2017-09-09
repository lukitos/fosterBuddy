
exports.seed = function(knex, Promise) {
  return knex('incident').del()
    .then(function () {
      return knex('incident').insert([
        {
          name: 'Black eye',
          description: 'Baby T had a fight with a kangaroo and unfortunately, kangaroo won. She is a lover, not a fighter',
          photo_url: 'https://s3.amazonaws.com/fosterbuddy/black-eye.png',
          profile_id: 2
        },
        {
          name: 'Emergency room visit',
          description: 'Baby T vomit excessively over the weekend. Pediatrician recommended a visit to the ER',
          photo_url: 'https://s3.amazonaws.com/fosterbuddy/er.jpg',
          profile_id: 2
        }
      ]);
    });
};
