var express = require('express');
var router = express.Router();
const tracksCtrl = require('../controllers/tracks');

/* GET users listing. */
router.get('/', tracksCtrl.index);

router.get('/addtrack', tracksCtrl.new);

router.get('/:id', tracksCtrl.show);

module.exports = router;
