let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next) {
	// check if the user is logged in
	if (!req.isAuthenticated()) {
		return res.redirect('/login');
	}

	next();
}

// const { route } = require('.');

/* GET route for the Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET route for displaying Add page - CREATE Operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST route for processing Add page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET route for displaying Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST route for processing Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;