var events = require('./controllers');

module.exports = function(app){
    app.route('/events')
        .post(events.createEvent)
        .get(events.listEvents)

    app.route('/events/:eventId')
        .get(events.getEvent)
        .put(events.updateEvent)
        .delete(events.deleteEvent)

    app.route('/events/:eventId')
        .post(events.subscribe)
};