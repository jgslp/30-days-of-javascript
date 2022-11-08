// 30 DAYS OF JAVASCRIPT - DAY 07

// LEVEL 1 EXERCISES

// 1. Declare a function fullName and have it print out your full name

// function printFullName() {
//     let firstName = "Jacqueline";
//     let lastName = "Gellick";
//     let fullName = `${firstName} ${lastName}`;
//     return fullName;
// }

// console.log(printFullName());

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and returns your full name

// function printFullName(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     return fullName;
// }

// console.log(printFullName("Jacqueline", "Gellick"));

// 3. Declare a function addNumbers that takes two parameters and returns a sum

// function addNumbers (num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// console.log(addNumbers(10, 5));

// 4. Write a function that calculates the area of a rectangle
// function areaOfRectangle(length, width) {
//     let area = length * width;
//     return area;
// }

// console.log(areaOfRectangle(10, 5));

// 5. Write a function that calculates the perimeter of a rectangle
// function perimeterOfRectangle (length, width) {
//     let perimeter = 2 * (length + width);
//     return perimeter;
// }

// console.log(perimeterOfRectangle(10, 5));

// // 6. Write a function which calculates the volume of a rectangular prism
// function volumeOfRectPrism(length, width, height) {
//     let volume = length * width * height;
//     return volume;
// }

// console.log(volumeOfRectPrism(10, 5, 2));

// 7. Write a function that calculates the area of a circle
// function areaOfCircle(r) {
//     let pi = 3.14;
//     let area = pi * r * r;
//     return area;
// }

// console.log(areaOfCircle(5));

// 8. Write a function that calculates the circumference of a circle

// function circumferenceOfCircle(r) {
//     let pi = 3.14;
//     let circumference = 2 * pi * r;
//     return (circumference);
// }

// console.log(circumferenceOfCircle(5));

// 9. Write a function that calculates density
// function density(mass, volume) {
//     let density = mass / volume;
//     return density;
// }

// console.log(density(10, 5));

// 10. Write a function that calculates the speed of a moving object
// function speed(distance, time) {
//     let speed = distance / time;
//     return speed;
// }

// console.log(speed(10, 5));

// // 11. write a function that calculates weight
// function weight(mass, gravity) {
//     let weight = mass * gravity;
//     return weight;
// }

// console.log(weight(50, 8));

// 12. Write a function that converts C to F
// function convertCToF(degrees) {
//     let fahrenheit = (degrees * 9 / 5) + 32;
//     return (fahrenheit);
// }

// console.log(convertCToF(22));

// // 13. Write a function that calculates bmi. Check if a person is underweight, normal, overweight, or obese
// function calculateBMI(weightInKG, heightInM) {
//     let bmi = weightInKG / (heightInM * heightInM);
//     if (bmi >= 30) {
//         return ("obese")
//     } else if (bmi >= 25) {
//         return ("overweight")
//     } else if (bmi >= 18.5) {
//         return ("normal weight") 
//     } else {
//         return ("underweight")
//     }
// }

// console.log(calculateBMI(50, 1.57));

// 14. Write a function called checkSeason, checks month parameter
// function checkSeason(month) {
//     if (month === "december" || month === "january" || month === "february") {
//         return ("winter");
//     } else if (month === "march" || month === "april" || month === "may") {
//         return ("spring");
//     } else if (month === "june" || month === "july" || month === "august") {
//         return ("summer");
//     } else {
//         return ("autumn");
//     }
// }

// console.log(checkSeason("november"));

// 15. Write a function findMax that takes three arguments and returns their maximum without using Math.max method
// function findMax(num1, num2, num3) {
//    const array = [num1, num2, num3];
//    let max = array[0];
//    for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//     }
//    } return max
// }

// console.log(findMax(-10, 2, 200));

// EXERCISES LEVEL 2

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function that calculates value of a linear equation.
// function solveLinEquation(a, b, c) {
   
// }

// console.log(solveLinEquation());

// 2. Quadratic equation is calculated as follows ax2 + bx + c = 0. Write a function which solves it
// function solveQuadratic(a, b, c) {
    
// }

// console.log(solveQuadtratic(1, 4, 4));

// 3. Declare a function named printArray. It takes array as a paraemeter and prints out each value of the array

// function printArray(array) {
//     for (const number of array) {
//         console.log(number);
//     }
// }

// printArray([1, 2, 3]);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 
// function showDateTime() {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = now.getMonth() + 1;
//     const date = now.getDate();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     return (`${month}/${date}/${year} ${hours}:${minutes}`);
// }

// console.log(showDateTime());

// 5. Write a function named swapValues. This function swaps values of x to y.
// function swapValues(x, y) {
//     let temp = x;
//     x = y;
//     y = temp;
//     return (`x = ${x} and y = ${y}`);
// }

// console.log(swapValues(5, 3));

// 6. Declare a function named reverseArray. It takes array as a parameter and returns the reverse (don't use method);
// function reverseArray(array) {
//     let reversedArray = [];
//     for (let i = 0; i <= array.length; i++) {
//         reversedArray.unshift(array[i]);
//     } 
//     return reversedArray;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]);

// 7. Declare a function named capitalizeArray that takes an array as a parameter and returns the capitalized array
// function capitalizeArray(array) {
//     let capitalizedArray = [];
//     for (const word of array) {
//         capitalizedArray.push(word.toUpperCase());
//     }
//     return capitalizedArray;
// }

// console.log(capitalizeArray(["pizza", "poodle"]));

// 8. Declare a function addItem, that takes an item parameter and returns an array after adding the item
// function addItem(array, item) {
//     array.push(item);
//     return array;
// } 

// console.log(addItem(["doberman", "golden retriever", "chihuahua"], "poodle"));

// 9. Declare a function named removeItem. It takes an index parameter and returns an array after removing item
// function removeItem(array, index) {
//     array.splice(index, 1);
//     return array;
// }

// console.log(removeItem(["doberman", "golden retriever", "chihuahua"], 2));

// 10. Declare a function named sumOfNumbers. It takes a number parameter and it adds all the numbers in that range
// function sumOfNumbers(number) {
//     let sum = 0;
//     for (i = 0; i <= number; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumOfNumbers(4));

// 11. Declare a function named sumOfOdds. It takes a number parameter and it adds all the odd numbers in that range. 
// function sumOfOddNumbers(number) {
//     let sum = 0;
//     for (i = 0; i <= number; i++) {
//         if (i % 2 !== 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(sumOfOddNumbers(5));

// 12. Declare a function named sumOfEvens. It takes a number parameter and it adds all the odd numbers in that range. 
// function sumOfEddNumbers(number) {
//     let sum = 0;
//     for (i = 0; i <= number; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(sumOfEddNumbers(5));

// 13. Declare a function named evenAndOdds. It takes a positive integer as a parameter and it counes number of evens and odds in the number
// function evensAndOdds(number) {
//     let numOfEvens = 0;
//     let numOfOdds = 0;
//     for (i = 0; i <= number; i++) {
//         if (i % 2 === 0) {
//             numOfEvens += 1;
//         } else {
//             numOfOdds += 1;
//         }
//     }
//     return `The number of odds are ${numOfOdds}. The number of evens are ${numOfEvens}.`
// }

// console.log(evensAndOdds(100));

// 14. Write a function which takes any number of arguments and return the sum of arguments

// 15. Write a function which generates randomUserIP
// function randomUserIP() {
//     let ipAddress = [];
//     for (let i = 0; i < 4; i++) {
//         ipAddress.push(Math.floor(Math.random() * 255));
//     }
//     console.log(ipAddress.join("."));
// }

// console.log(randomUserIP());

// 16. Write a function which generates a randomMacAddress


function randomMacAddress() {
    let possible = "ABCDEFabcdef0123456789"
    let macAddress = [];
    for (let i = 0; i < possible.length; i++) {
        macAddress.push(possible[Math.random() * possible.length])
    }
    console.log(macAddress);

console.log(randomMacAddress());