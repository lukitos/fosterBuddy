
exports.seed = function(knex, Promise) {
  return knex('profile').del()
    .then(function () {
      return knex('profile').insert([
        {
          name: 'Baby T1',
          description: 'Hispanic, brown eyes, born drug-exposed',
          photo_url: 'https://s3.amazonaws.com/fosterbuddy/profile1.jpg',
          dob: new Date().toISOString()
        },
        {
          name: 'Baby T2',
          description: 'Caucasian, blue eyes, born drug-exposed',
          photo_url: 'https://s3.amazonaws.com/fosterbuddy/profile2.jpg',
          dob: new Date().toISOString()
        }
      ]);
    });
};
