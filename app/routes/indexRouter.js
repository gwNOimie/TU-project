const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/indexController');
const indexController = new IndexController();

router.get('/', indexController.index);
router.post('/login', indexController.login);
router.post('/register', indexController.register);