const express = require('express');
const router = express.Router();

const passportConfig = require('../passport/passportConfig');
const IndexController = require('../controllers/indexController');

const indexController = new IndexController(passportConfig);

router.get('/', indexController.index.bind(indexController));
router.get('/login', indexController.loginPage.bind(indexController))
router.post('/login', indexController.loginAction.bind(indexController));
router.post('/register', indexController.register.bind(indexController));
router.get('/logout', indexController.logout.bind(indexController));

module.exports = router;