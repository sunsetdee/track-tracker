const Track = require('../models/track');

module.exports = {
    index,
    new: newTrack,
    show,
    create,
};

function index(req, res) {
    Track.find({})
    .populate('user')
    .exec(function(err, tracks) {
        res.render('tracks/index', { tracks });
    });
}

function newTrack(req, res) {
    res.render('tracks/new');
}

function show(req, res) {
    Track.findById(req.params.id, function(err, track) {
        res.render('tracks/show', { track });
    });
}

function create(req, res) {
    req.body.user = req.user._id;
    const track = new Track(req.body);
    track.save(function(err) {
        res.redirect('/tracks');
    });
}