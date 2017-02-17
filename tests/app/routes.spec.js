var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../../server');
var Event = require('../../app/events-model');

chai.use(chaiHttp);

describe('Routes', function(){

    before(function(done) {
        Event.remove(function(){
            done()
        })
    });

    describe('/CREATE events', function(){
        it('should create events without errors', function(done){
            var event = {
                "title": "Afro Vibes",
                "author": "58a6db04abfeda4e593e030e",
                "eventDate": "1487329815567",
                "description": "bla bla bla",
                "location": "Ikoyi, Lagos"
            }
            chai.request(server)
                .post('/events')
                .send(event)
                .end(function(err, res){
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title').eql('Afro Vibes');
                    done();
                });
        });
    });

    describe('/UPDATE events', function(){
        it('should update events without errors', function(done){
            done();
        });
    });

    describe('/LIST events', function(){
        it('should list events without errors', function(done){
            chai.request(server)
                .get('/events')
                .end(function(err, res){
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/DELETE events', function(){
        it('should delete events without errors', function(done){
            done();
        });
    });
});