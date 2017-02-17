var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventsSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    author: {
        type: Schema.ObjectId,
        required: true
    },
    location: {
        type: String,
    }
});

module.exports = mongoose.model('Events', eventsSchema);