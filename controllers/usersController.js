module.exports.profile = function(req,res){
    return res.render('user_profile', {
        title : 'Tan Park | Profile'
    });
}