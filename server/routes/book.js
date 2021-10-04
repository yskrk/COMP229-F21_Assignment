let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to the Book model
let Book = require('../models/book');

let bookController = require('../controllers/book');
const { route } = require('.');

/* GET route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);

/* GET route for displaying Add page - CREATE Operation */
router.get('/add', bookController.displayAddPage);

/* POST route for processing Add page - CREATE Operation */
router.post('/add', bookController.processAddPage);

/* GET route for displaying Edit page - UPDATE Operation */
router.get('/edit/:id', bookController.displayEditPage);

/* POST route for processing Edit page - UPDATE Operation */
router.post('/edit/:id', bookController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;