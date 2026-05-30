if(process.env.NODE_ENV!=="production"){
   require('dotenv').config();
}
const express =require('express');
const app=express();
const port=3000;
const path=require('path');
const mongoose=require('mongoose');
const Listing=require('./models/listing.js');
const { default: anymatch } = require('anymatch');
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');
const ExpressError=require('./utils/ExpressError.js');
const{listingSchema,reviewSchema}=require('./schema.js');
const Review=require('./models/review.js');
const listingsRouter=require("./routes/listing.js");
const reviewsRouter=require('./routes/review.js');
const session=require('express-session');
const MongoStore = require("connect-mongo").default;
const flash=require('express-flash');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/usr.js');
const userRouter=require('./routes/user.js');
const passportLocalMongoose=require("passport-local-mongoose");


const dbUrl=process.env.ATLASDB_URL;
main().then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}


app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


//mongo store
const store= MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET
    },
    touchAfter:24*60*60
});

store.on("error",()=>{
    console.log('session store error');
});

const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+1000*60*60*24*7,
        maxAge:1000*60*60*24*7,
        httpOnly:true
    },
};







app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error = req.flash("error");
    res.locals.currUser=req.user;
    next();
});



app.use("/listings",listingsRouter);
app.use('/listings/:id/reviews',reviewsRouter);
app.use('/',userRouter);





app.use((req,res,next)=>{
    next(new ExpressError(404,"page not found"));
});
app.use((err,req,res,next)=>{
   let { statusCode = 500 , message = "Something went wrong" } =  err;
   res.render("error.ejs",{err});
  // res.status(statusCode).send(message);

});




app.listen(port,()=>{
    console.log('server is running');
});
