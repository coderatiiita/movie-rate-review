const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const RatingAndReview = require('../models/ratingandreview');
const auth = require('../middlewares/auth');

router.get('/', (req, res) => {
    Movie.find({})
    .then(movies => {
        res.send(movies);
    })
    .catch(() => {
        res.status(500).send({ error: "Internal Server Error" });
    });
});

router.post('/ratingandreview/', auth.authenticate,(req, res) => {
    const {movieId, review, rating} = req.body;
    const userId = req.session.userId
    const ratingandreview = new RatingAndReview({userId, movieId, review, rating});
    
    RatingAndReview.updateOne({ userId, movieId }, {review, rating})
    .then((opData) => {
        if(opData.nModified !== 0)   res.status(201).send({ success: true, userId, movieId, rating, review});
        else {
            ratingandreview.save()
            .then(() => {
                res.status(201).send({ success: true, userId, movieId, rating, review});
            })
            .catch(err => {
                res.status(200).send({ error: "Internal Server Error", err});
            });
        }
    }).catch((err) => {
        res.status(200).send({ error: "Internal Server Error", err});
    });
});

router.get('/ratingandreview/:movieId', auth.authenticate, (req, res) => {
    const movieId = req.params.movieId;
    RatingAndReview.find({movieId})
    .then(reviews => {
        let avgRating = 0;
        reviews.forEach(review => {
            avgRating += review.rating;
        });
        avgRating = avgRating / reviews.length;
        Movie.findOne({_id: movieId})
        .then(movieData => {
            let obj = {
                succuess: true,
                movieData,
                ratingsandreviews: reviews,
                avgRating
            };
            res.status(200).send(obj);
        }).catch(err => {
            res.status(404).send({success: false, err});
        });
    })
    .catch(err => {
        res.status(404).send({success: false, err});
    });
});

module.exports = router;