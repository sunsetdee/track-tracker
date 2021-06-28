require('dotenv').config();
require('./config/database');

const Track = require('./models/track');
// const Performer = require('./models/driver');

let t;
let d;

Track.findOne({}, function(err, track) {
  t = track;
});