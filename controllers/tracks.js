const Track = require('../models/track');

module.exports = {
    index,
};

function index(req, res) {
    Track.find({}, function(err, tracks) {
        res.render('tracks/index');
    });
}