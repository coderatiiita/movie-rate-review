const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingandreviewSchema = new Schema({
    movieId: String,
    userId: String,
    review: String,
    rating: Number 
});

module.exports = mongoose.model('RatingAndReview', ratingandreviewSchema);