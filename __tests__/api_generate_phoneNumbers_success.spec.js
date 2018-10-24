import app from '../server';
import request from 'supertest';

afterAll( (done) => {
    app.close(done);
})

test('it generates phone numbers', done => {
  request(app)
    .post('/phonenumbers/generate')
    .send()
    .expect(200)
    .end((err, res) => {
        expect(res.body.count).toBeDefined
        expect(res.body.min).toBeDefined
        expect(res.body.max).toBeDefined
        expect(res.body.fileName).toBe('http://localhost:3000/ascending.txt')
        done()
    })
})

test('it generates the expected number of phone numbers', done => {
  request(app)
    .post('/phonenumbers/generate?count=5')
    .send()
    .expect(200)
    .end((err, res) => {
        expect(res.body.count).toBe(5)
        expect(res.body.min).toBeDefined
        expect(res.body.max).toBeDefined
        expect(res.body.fileName).toBe('http://localhost:3000/ascending.txt')
        done()
    })
})

test('it changes the sort order to ascending', done => {
  request(app)
    .post('/phonenumbers/change-sort-order?sortOrder=asc')
    .send()
    .expect(200)
    .end((err, res) => {
        expect(res.body.fileName).toBe('http://localhost:3000/ascending.txt')
        done()
    })
})

test('it changes the sort order to descending', done => {
  request(app)
    .post('/phonenumbers/change-sort-order?sortOrder=desc')
    .send()
    .expect(200)
    .end((err, res) => {
        expect(res.body.fileName).toBe('http://localhost:3000/descending.txt')
        done()
    })
})

test('it returns a 400 with an error message if an invalid sort order is sent', done => {

  request(app)
    .post('/phonenumbers/change-sort-order?sortOrder=random')
    .send()
    .expect(200)
    .end((err, res) => {
        expect(res.body.error).toBe('invalid sort order, sort can either be "asc" or "desc"')
        done()
    })
})
