let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to the Book model
let Book = require('../models/book');

/* GET route for the Book List page - READ Operation*/
router.get('/', (req, res, next) => {
	Book.find((err, bookList) => {
		if (err) {
			return console.error(err);
		} else {
			// console.log(BookList);
			res.render('book', {title: 'Book List', BookList: bookList});
		}
	});
});

module.exports = router;