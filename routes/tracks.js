var express = require('express');
var router = express.Router();
const tracksCtrl = require('../controllers/tracks');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/', tracksCtrl.index);

router.get('/new', isLoggedIn, tracksCtrl.new);

router.get('/:id', tracksCtrl.show);

router.post('/', isLoggedIn, tracksCtrl.create );



module.exports = router;
