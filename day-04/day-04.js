// 30 DAYS OF JAVASCRIPT - DAY 04

// EXERCISES: LEVEL 1

// 1. Get user input using prompt("Enter your age:"). If user is 18 or older, give feedback "You are old enough to drive" but if not give another feedback stating number of years they need to wait.
// let birthYear = prompt("Enter birth year here")
// let now = new Date();
// let yearNow = now.getFullYear();

// if ((yearNow - birthYear) >= 18 ){
//     console.log(`You are ${yearNow - birthYear}. You are old enough to drive.`);
// } else {
//     console.log(`You are ${yearNow - birthYear}. You will be allowed to drive after ${18 - (yearNow - birthYear)} years.`);
// }

// 2. Declare two variables myAge and yourAge and assign them initial values.
// let myAge = 33;
// let yourAge = 37;

// if (myAge == yourAge) {
//     console.log("We are the same age.");
// } else if (myAge > yourAge) {
//     console.log(`I am ${myAge - yourAge} years older than you.`);
// } else if (myAge < yourAge) {
//     console.log(`I am ${yourAge - myAge} years younger than you.`);
// }

// 3. If a is greater than b, return 'a is greater than b' else 'a is less than b'. Try to implement it with if/else and ternary.
// let a = 3;
// let b = 4;

// // Comparison
// if (a === b) {
//     console.log('a is equal to b');
// } else if (a > b) {
//     console.log('a is greater than b');
// } else {
//     console.log('a is less than b');
// }

// // Ternary
// (a === b) ? console.log('a is equal to b')
//     : (a > b) ? console.log('a is greater than b') : ('a is less than b')

// 4. Even numbers are divisible by 2 and the remainder is 0. How do you check if a number is even or not?

// Comparison
// let number = 10;

// if ((number % 2) === 0) {
//     console.log(`${number} is even.`);
// } else {
//     console.log(`${number} is odd.`);
// }

// // Ternary

// (number % 2 === 0) ? console.log(`${number} is even.`) : console.log(`${number} is odd.`);