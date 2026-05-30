
const express=require("express");
const router=express.Router();
const User=require("../models/usr.js");
const passport=require('passport');
const userController=require('../controllers/user.js');

router.get('/signup',userController.renderSignupForm);

  
router.post('/signup',userController.SignUp );



router.get('/login',userController.renderLoginForm);


router.post('/login',passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),userController.Login);

router.get('/logout',userController.LogOut);




module.exports=router;