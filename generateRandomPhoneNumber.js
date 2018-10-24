const MIN = 100000000;
const MAX = 999999999;

const generateRandomPhoneNumber = () => `0${Math.floor(Math.random() * (MAX - MIN + 1)) + MAX}`;

export default generateRandomPhoneNumber;