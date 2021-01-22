var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Skyosys' });
});
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Skyosys' });
});

router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Skyosys' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Skyosys' });
});


module.exports = router;
