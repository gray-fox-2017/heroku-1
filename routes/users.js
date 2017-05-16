var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Heroku for the first Time');
});

router.get('/list', function(req, res, next) {
  res.send('Heroku for the first Time');
});

module.exports = router;
