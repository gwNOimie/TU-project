const express = require('express');
const router = express.Router();

const passportConfig = require('../passport/passportConfig');
const IndexController = require('../controllers/indexController');
const indexController = new IndexController(passportConfig);


router.get('/', indexController.index);
router.post('/login', indexController.login);
router.post('/register', indexController.register);