var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Employee.findAll()
    .then(employee => {
      res.render('index', {
        employees : employee
      })
    })
});

module.exports = router;
