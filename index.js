const express = require('express');

const cookieParser = require('cookie-parser');

const port = 8080;

const app = express();

const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');

//handling post request data and cookies
app.use(express.urlencoded());
app.use(cookieParser());

//extract styles and scripts from subpages into layout
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//set up path to static files
app.use(express.static('./assets'));

//set up view engine and path to views
app.set('view engine', 'ejs');
app.set('views', './views');

//use express route
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err)
    {
        console.log('Error in firing up server ', err);
        return;
    }

    console.log('Server is Up and running on port : ', port);
});