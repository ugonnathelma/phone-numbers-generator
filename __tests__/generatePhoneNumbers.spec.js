jest.mock('../generateRandomPhoneNumber', 
    () => jest.fn()
        .mockImplementationOnce(() => 1)
        .mockImplementationOnce(() => 2)
        .mockImplementationOnce(() => 3)
        .mockImplementationOnce(() => 4)
    );

import generatePhoneNumbers from '../generatePhoneNumbers';

test('generates exactly as many phone numbers as is required and collects correct data about them', done => {

    const result = generatePhoneNumbers(4);

    expect(result).toEqual({
        generatedCount: 4,
        max: 4,
        min: 1,
        numbersSortedAscending: [1,2,3,4],
        numbersSortedDescending: [4,3,2,1]
    })

    jest.clearAllMocks();
    done();
})