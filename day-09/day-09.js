// 30 DAYS OF JAVASCRIPT - DAY 09

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Explain the difference between forEach, map, filter, and reduce
/*
forEach: Is only for arrays; takes a callback function with elements and optional(index parameter, array itself)
map: Is only for arrays; takes a callback function wtih elements, index, array, parameter, and returns a new array. Modifies the elements
filter: filters out items that fulfill filtering conditions and return new array
reduce: takes a callback function; takes accumulator, current, and optional initial value as a parameter and returns a single value
*/

// 2. Define a callback function before you use it in forEach, map, filter, or reduce
// A HOF is a function that takes another function as a parameter. The function passed as a parameter is the callback function

// // 3. Use forEach to console.log each country in the countries array
// countries.forEach((element) => console.log(element));

// // vs. using a loop
// for (const country of countries) {
//     console.log(country);
// }

// // 4. Use forEach to console.log each name in the names array
// names.forEach((element) => console.log(element));

// // 5. Use forEach to console.log each number in the numbers array
// numbers.forEach((element) => console.log(element));

// // 6. Use map to create a new array by changing each country to uppercase in the countries array
// const capitalizedCountries = countries.map((country) =>(country.toUpperCase()));
// console.log(capitalizedCountries);

// // vs. using forEach
// countries.forEach((element) => console.log(element.toUpperCase()));

// // 7. Use map to create an aray of countries length from countries array
// const charLengthOfCountries = countries.map((country) => (country.length));
// console.log(charLengthOfCountries);

// // 8. Use map to create a new array by changing each number to square in the numbers array
// const squaredNumbers = numbers.map((number) => (number * number));
// console.log(squaredNumbers);

// // 9. Use map to change each name to upperCase in the names array
// const capitalizedNames = names.map((name) => (name.toUpperCase()));
// console.log(capitalizedNames);

// // 10. Use map to map the products array to its corresponding prices
// const pricesOfProducts = products.map((product)=> product.product + ": " + product.price);
// console.log(pricesOfProducts);

// // 11. Use filter to filter out countries countaining land
// const countriesContainingLand = countries.filter((country) => 
//     country.includes('land')
// )

// console.log(countriesContainingLand); // prints ['Finland']

// // 12. Use filter to filter out countries having six characters
// const sixCharCountries = countries.filter((country) => 
//     country.length === 6
// )

// console.log(sixCharCountries); // prints ['Sweden', 'Norway']

// // 13. Use filter to filter out countries containing six letters and more in the country array
// const sixPlusCharCountries = countries.filter((country) =>
//     country.length >= 6
// )

// console.log(sixPlusCharCountries); // prints ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// // 14. Use filter to filter out countries starting with "E"
// const firstLetterECountries = countries.filter((country) => 
//     country[0] === ""
// )

// console.log(firstLetterECountries); // returns empty array

// // 15. Use filter to filter out only prices with values
// const pricesWithValues = products.filter((product) => {
//     if (product.price > 0) {
//         return `${products.product}: ${products.price}`
//     }
// }
// )
// console.log(pricesWithValues);

// // 16. Declare a function called getStringLists which takes an array as a parameter and returns an array only with string items
// function getStringList(array) {
//     const stringList = array.filter((item) => 
//     typeof item === "string"
//     )
//     return stringList;
// }

// console.log(getStringList([1, "pizza", "spaghetti", [4, 5, 6], true]));

// // 17. Use reduce to sum all numbers in the numbers array
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0)

// console.log(sum); // 55

// // 18. Use reduce to concatenate all the countries to produce this sentence:
// // Estonia, Finland, Sweden, Denmark, Norway, and Iceland are all northern European countries.
// const concatenatedCountries = countries.reduce((accumulator, currentValue) =>{
//     return accumulator + ", " + currentValue;
// })

// console.log(`${concatenatedCountries} are all northern European countries.`);

// 19. Explain the difference between some and every 
// Some: checks if some elements are similar in one aspect
// Every: checks if all elements are similar in one aspect
// Both return a boolean

// // 20. Use some to check if some names' length is greater than seven in names array
// const areSomeNamesGreaterThanSevenChars = names.some((name) => name.length > 7);
// console.log(areSomeNamesGreaterThanSevenChars); // prints true

// // 21. Use every to check if all the countries contain the word land
// const doAllCountriesContainLand = countries.every(country => country.includes('land'));
// console.log(doAllCountriesContainLand); // prints false

// 22. Explain the difference between find and findIndex
// find: returns the first element that satisfies the condition
// findIndex: returns the position of the first element that satisfies the condition

// // 23. Use find to find the first country containing only six letters in the countries array
// const firstCountryContainingSixLetters = countries.find((country) => country.length === 6);
// console.log(firstCountryContainingSixLetters); // prints 'Sweden`

// // 24. Use findIndex to find the position of the first country containing only six letters in the countries array
// const firstIndexContainingSixLetters = countries.findIndex((country) => country.length === 6);
// console.log(firstIndexContainingSixLetters); // prints 1

// 25. Use findIndex to find the position of Norway. If it doesn't exist in the array, you will get -1

// 26. Use the findIndex to find the position of Russia. If it doesn't exist in teh array, you will get -1