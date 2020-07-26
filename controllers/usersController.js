
const User = require('../models/user'); // added when create controller is created

module.exports.profile = function(req,res)
{
    if(req.cookies.user_id)
    {
        User.findById(req.cookies.user_id, function(err,user){

            if(user)
            {
                return res.render('user_profile',{
                    title: 'Tan Park | Profile',
                    user: user
                });
            }
            else
            {
                return res.redirect('/users/sign-in');
            }

        });

    }
    else
    {
        return res.redirect('/users/sign-in');
    }
}

module.exports.signUp = function(req,res){

    if(req.cookies.user_id)
    {
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up', {
        title : 'Tan Park | Sign Up'
    });
}

module.exports.signIn = function(req,res){

    if(req.cookies.user_id)
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

//Sign in and create a session for the user
module.exports.createSession = function(req, res)
{
    User.findOne({email: req.body.email}, function(err, user){

        if(err){console.log('Error in signing in'); return;}

        if(!user)
        {
            console.log('Error in finding user');
            return res.redirect('back');
        }
        else{
            if(req.body.password != user.password)
            {
                console.log('Incorrect Password');
                return res.redirect('back');
            }

            res.cookie('user_id',user.id);

            return res.redirect('/users/profile');
        }

    });
    
}

// Sign Out by deleting the cookie
module.exports.destroySession = function(req,res)
{
    res.clearCookie('user_id');

    return res.redirect('/users/sign-in');
}