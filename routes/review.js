const express = require('express');
const router = express.Router({ mergeParams: true });

const Listing = require('../models/listing.js');
const Review = require('../models/review.js');

router.post('/', async (req, res) => {

    if (!req.isAuthenticated()) {
        req.flash("error", "You must Logged in to create listing");
        return res.redirect('/login');
    }

    let listing = await Listing.findById(req.params.id);

    let newReview = new Review(req.body.review);

    // author save karo
    newReview.author = req.user._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
});

module.exports = router;