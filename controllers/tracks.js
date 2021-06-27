const Track = require('../models/track');

module.exports = {
    index,
    new: newTrack,
    show,
    create,
};

function index(req, res) {
    Track.find({}, function(err, tracks) {
        res.render('tracks/index', { tracks });
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

function create(req, res) {
    const track = new Track(req.body)
    track.save(function(err) {
        if (err) console.log(err)
        res.redirect('/tracks')
    });
}