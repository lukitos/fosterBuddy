
exports.up = function(knex, Promise) {
  return knex.schema.createTable('incident', function (table) {
    table.increments();
    table.string('name');
    table.text('description');
    table.timestamp('create_datetime').defaultTo(knex.fn.now());
    table.string('photo_url');
    table.integer('profile_id').references('id').inTable('profile');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('incident');
};
