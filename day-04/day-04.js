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

// EXERCISES LEVEL 2

// 1. Write code which can give grades to students according to their scores
// let grade = 99;

// if (grade >= 80) {
//     console.log("Your grade is an A");
// } else if (grade >= 70) {
//     console.log("Your grade is a B");
// } else if (grade >= 60) {
//     console.log("Your grade is a C");
// } else if (grade >= 50) {
//     console.log("Your grade is a D");
// } else {
//     console.log("Your grade is an F");
// }

// 2. Check if the season is autumn, winter, sprint, or summer
// let month = "March"

// if (month === "September" || month === "October" || month === "November") {
//     console.log("The season is Autumn");
// } else if (month === "December" || month === "January" || month === "February") {
//     console.log("The season is Winter");
// } else if (month === "March" || month === "April" || month === "May") {
//     console.log("The season is Spring");
// } else {
//     console.log("The season is Summer");
// }

// 3. Check if a day is a weekend day or a working day. Your script will take a day as an input.
// let day = prompt("What is the day today?").toLowerCase();

// if (day === "saturday" || day === "sunday") {
//     console.log(`${day} is a weekend day.`);
// } else {
//     console.log(`${day} is a working day.`);
// }

// EXERCISE LEVEL 3
// 1. Write a program which tells the number of days in a month

// let month = "february";

// if (month === "february") {
//     console.log(`${month} has 28 days (or 29 days in leap years).`);
// } else if (month === "september" || month === "april" || month === "june" || month === "november") {
//     console.log(`${month} has 30 days.`);
// } else {
//     console.log(`${month} has 31 days.`);
// }