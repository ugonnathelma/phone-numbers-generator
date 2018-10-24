import generateRandomPhoneNumber from '../generateRandomPhoneNumber';

test('generates a random ten digit number starting with zero', () => {

    const testRegex = /^0\d{9}/; 

    let first = generateRandomPhoneNumber();
    let second = generateRandomPhoneNumber();

    expect(testRegex.test(first)).toBeTruthy();
    expect(testRegex.test(second)).toBeTruthy();
    expect(first).not.toBe(second);
})


