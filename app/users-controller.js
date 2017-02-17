var Users = require('./users-model');

module.exports = {
    newUser: function(req, res){
        Users.create(req.body, function(err, user){
            if (err) {
                res.json(err);
            } else {
                res.json(user)
            }
        });
    },
    listUsers: function(req, res) {
        Users.find({}, function(err, users){
            if (err) {
                res.json(err);
            } else {
                res.json(users)
            }
        });
    },
    getUser: function(req, res){
        Users.find(req.params.usersId, function(err, user){
            if (err) {
                res.json(err);
            } else {
                res.json(user)
            }
        });
    },
    subscribe: function(req, res){
        Users.findByIdAndUpdate(req.params.userId, {$push: {subscriptions: req.params.eventId}}, function(err, response){
            if (err) {
                res.json(err);
            } else {
                res.json(response)
            }
        });
    }
}