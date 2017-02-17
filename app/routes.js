var events = require('./events-controller');
var users = require('./users-controller');

module.exports = function(app){

    app.route('/events')
        .post(events.createEvent)
        .get(events.listEvents)

    app.route('/events/:eventId')
        .get(events.getEvent)
        .put(events.updateEvent)
        .delete(events.deleteEvent)

    app.route('/users')
        .get(users.listUsers)
        .post(users.newUser)

    app.route('/users/:userId')
        .get(users.getUser)

    app.route('/events/:eventId/users/:userId/subscribe')
        .post(users.subscribe)


};