const express = require('express');
const router = express.Router();
const adminsCtrl = require('../controllers/admins');
const isLoggedIn = require('../config/auth');

router.get('/admins/:id/login', isLoggedIn, adminsCtrl.edit);

router.put('/admins/:id', isLoggedIn, adminsCtrl.update);

module.exports = router;

