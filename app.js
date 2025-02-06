import { welcomeMessage, convertKilometersToMeters, squareNumber, randomEvenNumber } from './utils.js';

welcomeMessage("Bruno");

console.log(`5 km in meters is: ${convertKilometersToMeters(5)} meters`);
console.log(`The square of 6 is: ${squareNumber(6)}`);
console.log(`Random even number between 1 and 50: ${randomEvenNumber(1, 50)}`);
