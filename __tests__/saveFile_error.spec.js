jest.mock('../writeToFile', () => () => new Promise((_, reject) => reject()));

import saveFile from '../saveFile';

test('should throw if there was an error writing to file', async()  => {

    try{
        await saveFile([], []);
    }catch(err){
        expect(err.message).toBe('error saving generated numbers')
    }finally{
        jest.clearAllMocks();
    }
})
