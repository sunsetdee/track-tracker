// const { TooManyRequests } = require('http-errors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const trackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', "Advance"]
    },
    openToPublic: {
        type: String,
        enum: ['Yes', 'No']
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Track', trackSchema);