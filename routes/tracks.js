var express = require('express');
var router = express.Router();
const tracksCtrl = require('../controllers/tracks');

/* GET users listing. */
router.get('/', tracksCtrl.index);

module.exports = router;
