
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile', function (table) {
    table.increments();
    table.string('name');
    table.text('description');
    table.date('dob');
    table.string('photo_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profile');
};
