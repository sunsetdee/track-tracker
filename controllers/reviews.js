const track = require('../models/track');
const Track = require('../models/track');

module.exports = {
    create,
};

function create(req, res) {
    Track.findById(req.params.id, function(err, movie) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        track.reviews.push(req.body);
        track.save(function(err) {
            res.redirect(`/tracks/${track._id}`);
        });
    });
};