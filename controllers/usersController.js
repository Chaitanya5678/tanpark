
const User = require('../models/user'); // Created when create controller is created

module.exports.profile = function(req,res){
    return res.render('user_profile', {
        title : 'Tan Park | Profile'
    });
}

module.exports.signUp = function(req,res){

    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up', {
        title : 'Tan Park | Sign Up'
    });
}

module.exports.signIn = function(req,res){

    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in', {
        title : 'Tan Park | Sign In'
    });
}

//Get the Sign Up data
module.exports.create = function(req, res)
{
    if(req.body.password != req.body.confirm_password)
    {
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err,user)
    {
        if(err){ console.log('Error in signing up'); return;}

        if(!user)
        {
            User.create(req.body, function(err,user){
                if(err){ console.log('Error in creating account while signing up');
                return;}
            });

            return res.redirect('/users/sign-in');
        }
        else{
            return res.redirect('back');

        }

    });
}

module.exports.createSession = function(req,res)
{
    return res.redirect('/users/profile');    
}

module.exports.destroySession = function(req,res)
{
    req.logout();
    return res.redirect('/');
}