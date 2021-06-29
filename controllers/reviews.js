const Track = require('../models/track');

module.exports = {
    create,
    delete: deleteReview,
    edit,
    update
};

function create(req, res) {
    Track.findById(req.params.id, function(err, track) {
        req.body.user = req.user._id;
        track.reviews.push(req.body);
        track.save(function(err) {
            res.redirect(`/tracks/${track._id}`);
        });
    });
}

async function deleteReview(req, res) {
    const track = await Track.findOne({'reviews._id': req.params.id});
    const review = track.reviews.id(req.params.id);
    if (!review.user.equals(req.user._id)) return res.redirect(`tracks/${track._id}`);
    review.remove();
    await track.save();
    res.redirect(`/tracks/${track._id}`);
}

function edit(req, res) {
    review.findOne({_id: req.params.id}, function(err, review) {
      if (err || !reviews) return res.redirect('/tracks');
      res.render('track/edit', {review});
    });
  }

  function update(req, res) {
    Track.findOne({'reviews._id': req.params.id}, function(err, track) {
      const trackReview = track.reviews.id(req.params.id);
      if (!trackReview.user.equals(req.user._id)) return res.redirect(`/tracks/${track._id}`);
      trackReview.content = req.body.content;
      trackReview.rating = req.body.rating;
      track.save(function(err) {
        res.redirect(`/tracks/${track._id}`);
      });
    });
  }