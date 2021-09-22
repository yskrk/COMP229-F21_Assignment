var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
	res.render('index', { title: 'Home' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
	res.render('index', { title: 'About Me' });
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
	res.render('index', { title: 'Products' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
	res.render('index', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
	res.render('index', { title: 'Contact' });
});

  module.exports = router;
