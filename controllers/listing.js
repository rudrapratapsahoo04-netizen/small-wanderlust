// control karta hai backend ko

const Listing=require("../models/listing");



// index 
module.exports.index=async (req,res)=>{
    
         const allListings=await Listing.find({});
    res.render('listings/index.ejs',{allListings})};

// new form create form
module.exports.renderNewForm= (req,res)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must Logged in to create listing");
        return res.redirect('/login');
    }
   res.render('listings/new.ejs')};


//show listings
module.exports.showListing = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate: { path: "author" },
    })
    .populate("owner");

    if (!listing) {
        return res.send("Listing not found");
    }

    res.render("listings/show.ejs", { listing });
};


// edit listing

module.exports.editListing=async(req,res)=>{
     if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must Logged in to create listing");
        return res.redirect('/login');
    }
    let {id}=req.params;
     const listing= await Listing.findById(id);
    res.render('listings/edit.ejs',{listing})};


//create listing
module.exports.createListing=async(req,res,next)=>{
    try{
    let url=req.file.path;
    let filename=req.file.filename;
    const newListing= new Listing(req.body.listing);
  if (req.file) {
    newListing.image = {
        url: req.file.path,
        filename: req.file.filename
    };
}
    const saveListing=await newListing.save();
    req.flash('success','Successfully made a new listing');
    res.redirect('/listings');
    }catch(err){
        next(err);
    }
   
};


// update listing
module.exports.updateListing=async(req,res)=>{
     if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must Logged in to create listing");
        return res.redirect('/login');
    }
     let{id}=req.params;
     let listing=await Listing.findById(id);
     if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","you don't have permission to edit");
        return res.redirect(`/listings/${id}`);
     }
    let listings =await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !=="undefined"){
          let url=req.file.path;
          let filename=req.file.filename;
          listings.imaage={url,filename};
          await listing.save();
    }
     req.flash("success","Listing Updated");
     res.redirect(`/listings/${id}`);
};



// delete listing

module.exports.deleteListing=async(req,res)=>{
     if(!req.isAuthenticated()){
        req.flash("error","You must Logged in to create listing");
        return res.redirect('/login');
    }
   let {id}=req.params;
     let listing=await Listing.findById(id);
     if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","you don't have permission to delete");
        return res.redirect(`/listings/${id}`);
     }
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');

};