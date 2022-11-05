// 30 DAYS OF JAVASCRIPT - DAY 07

// LEVEL 1 EXERCISES

// 1. Declare a function fullName and have it print out your full name

// function printFullName() {
//     let firstName = "Jacqueline";
//     let lastName = "Gellick";
//     let fullName = `${firstName} ${lastName}`;
//     console.log(fullName);
// }

// printFullName()

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and returns your full name

// function printFullName(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     console.log(fullName);
// }

// printFullName("Jacqueline", "Gellick")

// 3. Declare a function addNumbers that takes two parameters and returns a sum

// function addNumbers (num1, num2) {
//     let sum = num1 + num2;
//     console.log(sum);
// }

// addNumbers(10, 5);

// 4. Write a function that calculates the area of a rectangle
// function areaOfRectangle(length, width) {
//     let area = length * width;
//     console.log(area);
// }

// areaOfRectangle(10, 5);

// 5. Write a function that calculates the perimeter of a rectangle
// function perimeterOfRectangle (length, width) {
//     let perimeter = 2 * (length + width);
//     console.log(perimeter);
// }

// perimeterOfRectangle(10, 5);

// // 6. Write a function which calculates the volume of a rectangular prism
// function volumeOfRectPrism(length, width, height) {
//     let volume = length * width * height;
//     console.log(volume);
// }

// volumeOfRectPrism(10, 5, 2);

// 7. Write a function that calculates the area of a circle
// function areaOfCircle(r) {
//     let pi = 3.14;
//     let area = pi * r * r;
//     console.log(area);
// }

// areaOfCircle(5);

// 8. Write a function that calculates the circumference of a circle

// function circumferenceOfCircle(r) {
//     let pi = 3.14;
//     let circumference = 2 * pi * r;
//     console.log(circumference);
// }

// circumferenceOfCircle(5);

// 9. Write a function that calculates density
// function density(mass, volume) {
//     let density = mass / volume;
//     console.log(density);
// }

// density(10, 5);

// 10. Write a function that calculates the speed of a moving object
// function speed(distance, time) {
//     let speed = distance / time;
//     console.log(speed);
// }

// speed(10, 5);

// 11. write a function that calculates weight
// function weight(mass, gravity) {
//     let weight = mass * gravity;
//     console.log(weight);
// }

// weight(50, 8);

// 12. Write a function that converts C to F
// function convertCToF(degrees) {
//     let fahrenheit = (degrees * 9 / 5) + 32;
//     console.log(fahrenheit);
// }

// convertCToF(22);

// 13. Write a function that calculates bmi. Check if a person is underweight, normal, overweight, or obese
// function calculateBMI(weightInKG, heightInM) {
//     let bmi = weightInKG / (heightInM * heightInM);
//     if (bmi >= 30) {
//         console.log("obese")
//     } else if (bmi >= 25) {
//         console.log("overweight")
//     } else if (bmi >= 18.5) {
//         console.log("normal weight") 
//     } else {
//         console.log("underweight")
//     }
// }

// calculateBMI(50, 1.57);

// 14. Write a function called checkSeason, checks month parameter
// function checkSeason(month) {
//     if (month === "december" || month === "january" || month === "february") {
//         console.log("winter");
//     } else if (month === "march" || month === "april" || month === "may") {
//         console.log("spring");
//     } else if (month === "june" || month === "july" || month === "august") {
//         console.log("summer");
//     } else {
//         console.log("autumn");
//     }
// }

// checkSeason("november");