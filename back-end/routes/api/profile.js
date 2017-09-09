var knex = require('../../db/knex');
var express = require('express');
var router = express.Router();

/* GET profile listing. */
router.get('/', function(req, res, next) {
  knex('profile').then(function (profiles) {
    res.send(profiles);
  });
});

/* GET a profile by id. */
router.get('/:id', function(req, res, next) {
  knex('profile').where('id', req.params.id).then(function (profile) {
    res.send(profile);
  });
});

module.exports = router;
