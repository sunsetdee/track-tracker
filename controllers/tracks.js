const Track = require('../models/track');

module.exports = {
    index,
    new: newTrack,
    show,
};

function index(req, res) {
    Track.find({}, function(err, tracks) {
        res.render('tracks/index');
    });
}

function newTrack(req, res) {
    res.render('tracks/addtrack');
}

function show(req, res) {
    Track.findById(req.params.id, function(err, track) {
        res.render('tracks/detail');
    });
}