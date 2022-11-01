// 30 Days of JavaScript: Day 05

// EXERCISES - LEVEL 1
// 1. Declare an empty array;
// let array = [];

// 2. Declare an array with more than 5 number of elements
// let countriesVisited = [
//     "USA", 
//     "Canada", 
//     "Bahamas", 
//     "Argentina",
//     "UK", 
//     "France", 
//     "Italy", 
//     "Vatican", 
//     "Spain", 
//     "Morocco", 
//     "Portugal", 
//     "Germany", 
//     "Slovakia", 
//     "Austria", 
//     "Hungary", 
//     "Czechia", 
//     "Belgium", 
//     "Switzerland", 
//     "Netherlands", 
//     "Croatia", 
//     "Bosnia & Herzegovina"];

// 3. Find the length of your array.
// console.log(countriesVisited.length); // returns 21

// 4. Get the first item, middle item, and last item of the array

// // First item 
// console.log(countriesVisited[0]); // returns USA

// // Last item
// console.log(countriesVisited[countriesVisited.length - 1]); // returns Bosnia & Herzegovina

// // Middle item
// let middle;

// if (countriesVisited.length % 2 === 1) {
//     middle = (countriesVisited.length - 1) / 2;
// } else {
//     middle = (countriesVisited.length / 2);
// }
 
// console.log(countriesVisited[middle]); // yields Portugal

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
// let mixedDataTypes = [
//     33,
//     "Jackie",
//     true,
//     null,
//     "pizza",
//     "poodle",
// ]

// console.log(mixedDataTypes.length);

// 6. Declare an array variable named itCompanies and assign initial values listed

// let itCompanies = [
//     "Facebook",
//     "Google", 
//     "Microsoft",
//     "Apple",
//     "IBM",
//     "Oracle",
//     "Amazon"
// ]

// 7. Print the array using console.log();
// console.log(itCompanies);

// // 8. Print the number of companies in the array;
// console.log(itCompanies.length); // yields 7

// 9. Print the first company, middle, and last company
// First company:
// console.log(itCompanies[0]); // prints "Facebook";

// // Last company:
// console.log(itCompanies[itCompanies.length - 1]); // prints "Amazon";

// // Middle company:

// console.log(itCompanies[(itCompanies.length -1)/2]); //prints "apple";

// 10. Print out each company
// for (i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i]);
// }

// 11. Change each company name to upppercase one by one and print them out

// for (i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
// }

// 12. Print the array as a sentence: 
// console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]}, are big IT companies.`);

// 13. Check if a certain company exists in the itCompanies array. If it exists return the company else return a company is not found.
// let company = "Apple";
// if (itCompanies.includes(company)) {
//     console.log(company);
// } else {
//     console.log("not found");
// }

// 14. Filter out companies which have more than one 'o' without the filter method

// let newArray = [];

// for (let i = 0; i < itCompanies.length; i++) {
//    if  (itCompanies[i].includes("o") == false) {
//         newArray.push(itCompanies[i]);
//    } else if (itCompanies[i].indexOf("o") === itCompanies[i].lastIndexOf("o")) {
//         newArray.push(itCompanies[i]);
//    } 
// }
// console.log(newArray);

// 15. Sort the array using sort() method. 

// console.log(itCompanies.sort());

// 16. Reverse the array using the reverse() method;

// console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array;

// let sliced = itCompanies.slice(0, 3);
// console.log(sliced);

// 18. Slice out the last 3 companies from the array

// let sliced = itCompanies.slice(-3);
// console.log(sliced);

// 19. Slice out the middle IT company or companies from the array

// let sliced = itCompanies.slice(1, -1);
// console.log(sliced);

// 20. Remove the first IT company from the array;

// let shifted = itCompanies.shift();
// console.log(shifted, itCompanies);

// 21. Remove the middle IT company or companies from the array;

// let spliced = itCompanies.splice(1, itCompanies.length-2);
// console.log(spliced, itCompanies);

// 22. Remove the last IT company from the array;
// let popped = itCompanies.pop();
// console.log(popped, itCompanies);

// 23. Remove all IT companies
// let removed = itCompanies.splice(0, itCompanies.length);
// console.log(removed, itCompanies);

// EXERCISES LEVEL 2

// 1. Create a separate countries.js file and store the countries array into this file. Create a separate file web_tech.js and sotre the webTechs array in to this file. Access both file in main.js. 
// I am skipping this item for now

// 2. First remove all the punctuations and change teh string to array and count the number of words in the array.
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// text = text.replaceAll('.', '');
// text = text.replaceAll(',', '');

// console.log(text); // confirmed that all punctuation has been removed

// let array = text.split(" ");

// console.log(array); // where array where each item is a word
// console.log(array.length); // returns 13, correct

// 3. In the following shopping cart, add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// // Add 'meat at the beginnning, sugar to the end

// shoppingCart.unshift('Meat');
// shoppingCart.push('Sugar');
// shoppingCart[3] = 'Green Tea';
// console.log(shoppingCart);

// 4. In the countries array check if 'Ethopia' exists in the aray and if it exists print "ETHIOPIA". If it does not exist add it to the countries list

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

//   console.log(countries.includes("Ethiopia")); // returns true
//   console.log(countries[4].toUpperCase()); // prints to upper case

// 5. In the webTechs array, check if Sass exists in the array. If it exists print "Sass is a CSS preprocess". If it does not add it to the array and print it. 

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   console.log(webTechs.includes("Sass")); // returns false;
//   webTechs.push("Sass");

//   console.log(`${webTechs[webTechs.length-1]} is a CSS preprocess.`);

// 6. Concatenate the folowing two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node','Express', 'MongoDB'];

// const fullStack = frontEnd.concat(backEnd);

// console.log(fullStack);

// 7. The following is an array of 10 students' ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// // Sort the array and find the min and max age.

// let sorted = ages.sort();
// let min = sorted[0];
// let max = sorted[sorted.length-1];
// console.log(sorted, "min is", min, "max is", max);

// Find the median age (one middle item or two middle items divided by two);

// console.log(sorted.length);

// the below checks if array length is odd or even and then finds median
// if (sorted.length % 2 == 0) {
//     console.log(((sorted[sorted.length / 2]) + (sorted[sorted.length / 2 - 1])) / 2);
// } else {
//     console.log((sorted[sorted.length / 2 - 0.5]));
// }

// Find the range of ages

// let range = sorted[sorted.length - 1] - sorted[0];
// console.log(range);

// Compare the value of (min - average) and (max - average), use abs() method 
// let average = ages.reduce((a, b) => a + b, 0) / ages.length;
// console.log(average); // returns 22.8;

// let minVsAverage = Math.abs(sorted[0] - average);
// let maxVsAverage = Math.abs(sorted[sorted.length-1] - average);

// console.log("min - average:", minVsAverage, "max - average:", maxVsAverage ); // 3.8 and 3.19 respectively

// 2. Slice the first ten countries from the countries array
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya', 
  ]

// let sliced = countries.slice(0, 9);
// console.log(sliced);

// Find the middle countries in the countries array

// if (countries.length % 2 == 0) {
//     let spliced = countries.splice(countries[countries.length / 2 - 1], 2);
//     console.log(spliced);
// } else {
//     console.log((countries[countries.length / 2 - 0.5]));
// }

// 3. Divide the countries array in two equal arrays if even. If it is not even, one more country in the first half. 

// let firstArray = [];
// let secondArray = [];
// let half = countries.length / 2;

// for (i = 0; i <= countries.length / 2; i ++) {
//     firstArray.push(countries[i]);
// }

// for (let j = countries.length - 1; j > countries.length / 2; j--) {
//     secondArray.unshift(countries[j]);
// }

// console.log("first array is: ", firstArray, " and second is ", secondArray);