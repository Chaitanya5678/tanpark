module.exports.home = function(req,res)
{
    // console.log(req.cookies);
    // res.cookie('user_id', 222);

    return res.render('home', {
        title : 'Tan Park | Home'
    });
}