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
//    let array = [num1, num2, num3] {

//    }
// }