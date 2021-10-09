let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET route for displaying Login page */
router.get('/login', indexController.displayLoginPage);

/* POST route for processing Login page */
router.post('/login', indexController.processLoginPage);

/* GET route for displaying Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST route for processing Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform User logout*/
router.get('/logout', indexController.performLogout);

module.exports = router;