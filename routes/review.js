const express= require("express");
const router= express.Router({mergeParams: true});
const Listing= require("../models/listing.js");
const wrapAsync= require("../utils/wrapAsync.js");
const Review= require("../models/review.js");
const {validateReview, isLoggedIn,isReviewAuthor}= require("../middleware.js");

const reviewController= require("../controllers/reviews.js");

//Reviews
//Post Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId",isReviewAuthor,isLoggedIn, wrapAsync(reviewController.destroyReview));

module.exports= router;