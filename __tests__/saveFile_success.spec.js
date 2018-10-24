jest.mock('../writeToFile', () => () => new Promise(resolve => resolve()));

import saveFile from '../saveFile';

test('should return an array of file names', async() => {
    let result = await saveFile([],[]);

    expect(result).toEqual([
        'ascending.txt',
        'descending.txt'
    ])

    jest.clearAllMocks();
})
