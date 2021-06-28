const track = require('../models/track');
const Track = require('../models/track');

module.exports = {
    create,
    delete: deleteReview,
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
}

async function deleteReview(req, res) {
    const track = await Track.findOne({'reviews._id': req.params.id});
    const review = track.reviews.id(req.params.id);
    if (!review.user.equals(req.user._id)) return res.redirect('tracks/${track._id}');
    review.remove();
    await track.save();
    res.redirect('/tracks/${track._id}');
}