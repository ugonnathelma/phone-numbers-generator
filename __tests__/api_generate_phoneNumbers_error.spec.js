jest.mock('../saveFile', () => () => {  
    console.log('mocking saveFile');
        return new Promise((_, reject) => reject('Failed to save generated numbers'))
})

import request from 'supertest';
import app from '../server';

afterAll( (done) => {
    app.close(done);
})

test('it returns a 500 status message if an error occured generating phone numbers', done => {
    
    request(app)
    .post('/phonenumbers/generate')
    .send()
    .expect(500)
    .end((err, res) => {
        expect(res.text).toBe('Failed to save generated numbers');
        jest.clearAllMocks();
        done()
    })
})