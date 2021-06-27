require('./config/database')
const Movie = require('./models/track');
// const Performer = require('./models/driver');

let t;
let d;

Track.findOne({}, function(err, track) {
  t = track;
});