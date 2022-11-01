// 30 Days of JavaScript: Day 05

// EXERCISES - LEVEL 1
// 1. Declare an empty array;
// let array = [];

// 2. Declare an array with more than 5 number of elements
let countriesVisited = [
    "USA", 
    "Canada", 
    "Bahamas", 
    "Argentina",
    "UK", 
    "France", 
    "Italy", 
    "Vatican", 
    "Spain", 
    "Morocco", 
    "Portugal", 
    "Germany", 
    "Slovakia", 
    "Austria", 
    "Hungary", 
    "Czechia", 
    "Belgium", 
    "Switzerland", 
    "Netherlands", 
    "Croatia", 
    "Bosnia & Herzegovina"];

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

let itCompanies = [
    "Facebook",
    "Google", 
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
]

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

// doesn't work, fix
for (let i = 0; i < itCompanies.length; i++) {
   if (itCompanies.indexOf("o") !== itCompanies.lastIndexOf("o")) {
        itCompanies.shift();
   } 
}
console.log(itCompanies);