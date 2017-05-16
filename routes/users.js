var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.Employee.findAll()
    .then(employees => {
      res.render('index', {
        employees : employee
      })
    })
});


module.exports = router;
