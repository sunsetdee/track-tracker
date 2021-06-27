// const { TooManyRequests } = require('http-errors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', "Advance"]
    },
    openToPublic: { type: Boolean, default: true},

}, {
    timestamps: true
});

module.exports = mongoose.model('Track', trackSchema);