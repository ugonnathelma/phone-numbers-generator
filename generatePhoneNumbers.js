import generateRandomPhoneNumber from './generateRandomPhoneNumber'

const generateNumbers = (count) => {
    let numbers = [], numbersReversed = null;
    while(count > 0){
        numbers.push(generateRandomPhoneNumber())
        count--;
    }

    numbers.sort((a,b) => a > b ? 1 : a < b ? -1 : 0)
    numbersReversed = [...numbers].reverse();
    return {
        generatedCount: numbers.length,
        min: numbers[0],
        max: numbersReversed[0],
        numbersSortedAscending: numbers,
        numbersSortedDescending: numbersReversed
    }
}

export default generateNumbers;