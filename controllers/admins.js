var User = require('../models/user');

module.exports = { 
    edit,
    update
}

function edit(req, res) {
    User.findOne({_id: req.params.id}, function(err, user) {
        if (err || !user) return res.redirect('/');
        res.render('admins/login', { user });
      });
};

function update(req, res) {
    let adminAttemps = req.user.loginAttemps; 
    if (req.body.password === process.env.SECRET && adminAttemps < 3) {
        User.findByIdAndUpdate({_id: req.params.id}, {admin: true}, {new:true}, function(err, user) {
            res.redirect('/'); 
        });
    } else { 
        User.findByIdAndUpdate({_id: req.params.id}, {loginAttemps: ++loginAttemps}, {new:true}, function(err, user) {
            res.redirect('/'); 
        });
    }
}