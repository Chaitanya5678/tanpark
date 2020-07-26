module.exports.profile = function(req,res){
    return res.render('user_profile', {
        title : 'Tan Park | Profile'
    });
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up', {
        title : 'Tan Park | Sign Up'
    });
}

module.exports.signIn = function(req,res){
    return res.render('user_sign_in', {
        title : 'Tan Park | Sign In'
    });
}

module.exports.create = function(req,res)
{
    
}

module.exports.createSession = function(req,res)
{
    
}