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