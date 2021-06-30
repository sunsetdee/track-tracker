const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');

router.post('/tracks/:id/reviews', isLoggedIn, reviewsCtrl.create);
router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delete);
router.get('/reviews/:id/edit', isLoggedIn, reviewsCtrl.edit);
router.put('/reviews/:id', isLoggedIn, reviewsCtrl.update);

module.exports = router;