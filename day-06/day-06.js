// 30 DAYS OF JAVASCRIPT - DAY 06

// EXERCISES LEVEL 1

// 1. Iterate 0 to 10 using a for loop, while loop, and do while loop.
// FOR LOOP

// let count = 0;
// for (i = 0; i <= 10; i++) {
//     console.log(count ++)
// }

// WHILE LOOP
// let count = 0;
// while (count <= 10) { 
//     console.log(count++);
// }

// DO WHILE LOOP
// let count = 0;
// do {
//     console.log(count++)
// } while (count <= 10);

// 2. Iterate 10 to 0 using a for loop, while loop, and do while loop.
// FOR LOOP
// let count = 10;
// for (i = count; i >= 0; i--) {
//     console.log(count--);
// }

// WHILE LOOP
// let count = 10;
// while (count >= 0) {
//     console.log(count--);
// }

// DO WHILE LOOP
// let count = 10;
// do {
//     console.log(count--);
// } while (count >= 0);

// 3. Iterate 0 to n using a for loop

// FOR LOOP
// let n = 15;
// let count = 0;
// for (i = 0; i <= n; i++) {
//     console.log(count ++)
// }

// // WHILE LOOP
// let n = 15;
// let count = 0;
// while (count <= n) { 
//     console.log(count++);
// }

// // DO WHILE LOOP
// let count = 0; 
// let n = 15;
// do {
//     console.log(count++)
// } while (count <= n);

// 4. Write a loop that makes the following pattern using console.log();

// FOR LOOP
// let x = "";

// for (i = 0; i < 7; i++) {
//     console.log( x += "#");
// }

// WHILE LOOP
// let count = 0;
// let x = "";
// while (count < 7) {
//     console.log(x += "#");
//     count++;
// }

// DO WHILE LOOP
// let count = 0;
// let x = "";
// do {
//     console.log(x += "#");
//     count ++;
// } while (count < 7);

// 5. Use a loop to print the following pattern:

// FOR LOOP

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);
// }

 // WHILE LOOP
//  let x = 0;
//  while (x <= 10) {
//     console.log(`${x} x ${x} = ${x * x}`);
//     x++;
//  }

// DO WHILE LOOP
// let x = 0;
// do {
//     console.log(`${x} x ${x} = ${x * x}`);
//     x++;
// } while (x < 11);

// 6. Using loop print the following pattern

// FOR LOOP

// for (let i = 0; i <= 10; i++) {
//     console.log(i, i * i, i * i * i);
// }

// WHILE LOOP

// let i = 0;

// while (i <= 10) {
//     console.log(i, i * i, i * i * i);
//     i++;
// }

// DO WHILE LOOP

// let i = 0;
// do {
//     console.log(i, i * i, i * i * i);
//     i++;
// } while (i <= 10);

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// } 

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     } 
// }

// 9. Use for loop to iterate 0 to 100 and print only prime numbers

// for (let i = 0; i <= 100; i++) {
//   let prime = i > 1;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j == 0) {
//       prime = false;
//     }
//   }
//   if (prime) {
//     console.log(i, "is prime");
//   }
// }


// 10. Use a for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }

// console.log(`The sum of all numbers from 0 to 100 is ${sum}`);


// 11. Use a for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         sumEven += i;
//     } else {
//         sumOdd += i;
//     }   
// }

// console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds is ${sumOdd}`);

// 12. Use for loop to iterate from 0 to 100 and print the sum of alle vens and the sum of all odds as an array.
// let array = [];
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         sumEven += i;
//     } else {
//         sumOdd += i;
//     }   
// }
// array.push(sumEven, sumOdd);
// console.log(array);

// 13. Develop a small script which generates an array of 5 random numbers
// let array = [];

// for (let i = 0; i <= 5; i++) {
//     array.push(Math.floor(Math.random() * 100));
// }
// console.log(array);

// 14. Develop a small script which generates an array of 5 random numbers and the numbers must be unique.
// let randomArray = [];
// let count = 5;

// while (randomArray.length < count) {
//     let random = (Math.floor(Math.random() * 100));
//     if (randomArray.indexOf(random) !== 1) {
//         randomArray.push(random);
//     }
// }
// console.log(randomArray);

// 15. Develop a small script which generates a six character randomID

// let random = "";
// let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// for (let i = 0; i < 6; i++) {
//     random += characters.charAt(Math.floor(Math.random() * characters.length));
// }

// console.log(random);

// Exercises - Level 2

// 1. Develop a small script which will generate any number of characters randomID:

// let random = "";
// let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// let n = 20;

// for (let i = 0; i < n; i++) {
//     random += characters.charAt(Math.floor(Math.random() * characters.length));
// }

// console.log(random);

// 2. Write a script which generates a random hexadecimal number

// let random = "";
// let characters = "0123456789abcdef";

// for (let i = 0; i < 6; i++) {
//     random += characters.charAt(Math.floor(Math.random() * characters.length));
// }

// console.log("#" + random);

// Write a script which generates a random rgb color number

// let random = [];

// for (let i = 0; i < 3; i++) {
//     random.push(Math.floor(Math.random() * 255));
// }

// console.log(`rbg(${random[0]}, ${random[1]}, ${random[2]})`);

// 6. Using the countries array, create the following array of arrays:
// [['Albania', 'ALB', 7]...]
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

//   let newArray = [];
  
//   for (country of countries) {
//     newArray.push(country.split());
//   }

//  for (array of newArray) {
//     array.push(array[0].slice(0,3).toUpperCase());
//     array.push(array[0].length);
//  }

//  console.log(newArray);

// 7. In the countries array, check to see if there is a country or countries containing
// the word "land". If there are countries containing "land", print it as an array.
// If there is no country containing "land", print, "All these countries are without "land"

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

// let landArray = [];

// for (country of countries) {
//     if (country.includes("land")) {
//         landArray.push(country);
//     }
// }

// if (landArray.length === 0) {
//     console.log("All these countries are without land");
// }

// console.log(landArray);

// 8. In the countries array, check if there is a country that ends with a substring "ia".
// If there are, print as an array. If not, print, "These are countries that do not end in ia"

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

// let iaArray = [];

// for (country of countries) {
//     if (country.charAt(country.length-2) === "i" && country.charAt(country.length - 1) === "a")
//         iaArray.push(country);
//     }

// if (iaArray.length === 0) {
//     console.log("None of these countries end in ia");
// }

// console.log(iaArray);

// 9. Using the countries array, find the country containing the biggest number of characters

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

//   let newArray = []

//   for (country of countries) {
//     newArray.push(country.length);
//   }
  
// let max = (Math.max(...newArray));

// for (country of countries) {
//     if (country.length === max) {
//         console.log(country);
//     }
// }

// 10. Find the country containing only 5 characters and return in an array
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

//   let fiveCharArray = [];

//   for (country of countries) {
//     if (country.length === 5)  {
//         fiveCharArray.push(country);
//     }
//   }

//   console.log(fiveCharArray);

// 11. Find the longest word in the webtechs array

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   let lengthArray = [];

//   for (program of webTechs) {
//         lengthArray.push(program.length);
//   }

//  let max = Math.max(...lengthArray);

// for (program of webTechs) {
//     if (program.length === max) {
//         console.log(program);
//     }
// }

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4]...],

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   let webArray = [];

// for (program of webTechs) {
//     webArray.push(program.split());
// }

// for (array of webArray) {
//     array.push(array[0].length);
// }

// console.log(webArray);

// 13. An application created using MongoDB, Express, React, and Node is called a MERN stack app.
// Create the aconym MERN by using the array mernStack

// const mernStack = [
//     'MongoDB',
//     'Express',
//     'React',
//     'Node',
//   ]
// let mern = "";

//   for (program of mernStack) {
//     (mern += program[0]);
//   }

// console.log(mern);

// 14. Iterate through the array using a for of loop and print out the items

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   for (program of webTechs) {
//     console.log(program);
//   }