var knex = require('../../db/knex');
var express = require('express');
var router = express.Router();

/* GET incident listing. */
router.get('/', function(req, res, next) {
  knex('incident').then(function (incidents) {
    res.send(incidents);
  });
});

/* CREATE a new incident. */
router.post('/', function (req, res, next) {
  knex('incident').insert(req.body).then(function () {
    knex('incident').then(function (incidents) {
      res.send(incidents);
    });
  });
});

/* EDIT an incident. */
router.patch('/:id', function (req, res, next) {
  knex('incident').where('id', req.params.id).update(req.body)
    .then(function () {
      knex('incident').then(function (incidents) {
        res.send(incidents);
      });
    })
    .catch(err => res.send(err));
});

/* DELETE an incident. */
router.delete('/:id', function (req, res, next) {
  knex('incident').where('id', req.params.id).del()
    .then(function () {
      knex('incident').then(function (incidents) {
        res.send(incidents);
      });
    }
  );
});

module.exports = router;
