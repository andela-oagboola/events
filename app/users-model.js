var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    subscriptions: {
        type: Array
    }
});

module.exports = mongoose.model('Users', usersSchema);