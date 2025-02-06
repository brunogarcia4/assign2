export function welcomeMessage(name) {
    console.log(`Hello ${name}, welcome to the course!`);
}

export function convertKilometersToMeters(km) {
    return km * 1000;
}

export function squareNumber(number) {
    return number * number;
}

export function randomEvenNumber(min, max) {
    let num;
    do {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (num % 2 !== 0);
    return num;
}
