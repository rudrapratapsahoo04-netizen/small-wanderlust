const User=require('../models/usr');

// render sign up form
module.exports.renderSignupForm= (req,res)=>{
   res.render('users/signup.ejs')
};


//sign up

module.exports.SignUp=async (req, res) => {
    try {

        let { username, email, password } = req.body;

        const newUser = new User({
            email,
            username
        });

        const registeredUser=await User.register(newUser, password);
        req.login(registeredUser,(err)=>{
           if(err){
            return next(err);
           }
            res.redirect("/listings");
        });
    } catch (err) {

        req.flash("error", err.message);

        res.redirect("/signup");
    }
};

// render login page

module.exports.renderLoginForm=(req,res)=>{
  res.render("users/login.ejs");
};

// Login 

module.exports.Login=async(req,res)=>{
    req.flash("success","Welcome to WanderLust");
    res.redirect('/listings');
     
};

// Log out 

module.exports.LogOut=(req,res)=>{ 
     req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","You are logOut");
        res.redirect('/listings');
     })
};