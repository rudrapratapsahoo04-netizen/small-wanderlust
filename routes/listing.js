const express=require('express');
const router=express.Router();
const{listingSchema,reviewSchema}=require('../schema.js');
const ExpressError=require('../utils/ExpressError.js');
const Listing=require('../models/listing.js');
const flash=require('express-flash');
const listingController=require("../controllers/listing.js");
const multer=require('multer');
const {storage}=require('../cloudConfig.js');
const upload=multer({storage:storage});


const validateListing=(req,res,next)=>{
     let result = listingSchema.validate(req.body);
        if(result.error){
            throw new ExpressError(400, result.error);
        }else{
            next();
        }
}


const validateReviews=(req,res,next)=>{
     let result = validateReviews.validate(req.body);
        if(result.error){
            throw new ExpressError(400, result.error);
        }else{
            next();
        }
}

//index route
router.get('/',listingController.index);
//new route
router.get('/new',listingController.renderNewForm);
//show route
router.get('/:id',listingController.showListing);
// edit route
router.get('/:id/edit',listingController.editListing);
//create route
router.post('/',upload.single('listing[image]'),validateListing,listingController.createListing);
//update route
router.put('/:id',upload.single('listing[image]'),validateListing,listingController.updateListing);
//deleteroute
router.delete('/:id',listingController.deleteListing);
module.exports=router;