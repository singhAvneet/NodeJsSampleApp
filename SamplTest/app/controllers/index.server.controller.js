﻿// Create a new 'render' controller method
exports.render = function (req, res) {
    
    
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('index', {
        title: 'Enter User'
    });
    //you may also render an html form
    //res.render('user.html');
};
