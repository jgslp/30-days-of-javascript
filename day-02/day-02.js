// 30 Days of Javascript: Day 02

// DAY 02 EXERCISES - LEVEL 1
// 1. Declare a variable named challenge and assign it to an initial value of "30 Days of Javascript";
const challenge = "30 Days of JavaScript";

// 2. Print the string on the browser console using console.log();
// console.log(challenge);

// 3. Print the length of the string on the browser console using console.log();
// console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method.
// console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase using toLowerCase() method. 
// console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method.
// substr() takes two arguments, the starting index and the number of characters to slice
// console.log(challenge.substr(0, 2));

// substring() takes two arguments, the starting index and stopping index but doesn't include the character at the stopping index
// console.log(challenge.substring(0,3));

// 7. Slice out the phrase Days of Javascript from 30 days of Javascript;
// using substr();
// console.log(challenge.substr(3, 18));
// using substring();
// console.log(challenge.substring(3, 21));

// 8. Check if the string contains a word Script using includes() method
// console.log(challenge.includes("Script")); // prints true

// 9. Split the string into an array using split() method
// console.log(challenge.split());

// 10. Split the string at the space using split() method
// console.log(challenge.split(" "));

// 11. Split the string at the comma and change it to an array
// let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(companies.split(","));

// 12. Change 30 Days of JavaScript to 30 Days of Python using the replace() method;
// console.log(challenge.replace("JavaScript", "Python"));

// 13. What character is at index 15 in the challenge string? 
// console.log(challenge.charAt(15));

// 14. What is the character code of J in the challenge string? 
// console.log(challenge.charCodeAt('J'));

// 15. Use indexOf to determine the position of the first occurrence of a in the challenge string
// console.log(challenge.indexOf('a'));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in the challenge string
// console.log(challenge.lastIndexOf("a"));

// 17. Use indexOf to find the position of the first occurrence in the word because in the following sentence
// let sentence = "You cannnot end a sentence with because because because is a conjunction";
// console.log(sentence.indexOf("because"));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because:
// console.log(sentence.lastIndexOf("because"));

// 19. Use search to find the position of the first occurrence of the word because
// console.log(sentence.search("because"));

// 20. Use trim() to remove any trailing whitespace in at the beginning and end of a string
// let string = "  30 Days of JavaScript  ";
// console.log(string.trim());

// 21. Use startsWith() method with the challenge string to make the result true
// console.log(challenge.startsWith("3"));

// 22. Use endsWith() method with the challenge string to make the result true
// console.log(challenge.endsWith("t"));

// 23. Use match() method to find all the a's in the challenge string
// console.log(challenge.match(/a/gi)); // returns array ['a', 'a', 'a'];

// 24. Use concat() and merge "30 Days of" and "Javascript" into a single string
// let first = "30 Days Of ";
// let last = "Javascript";
// console.log(first.concat(last));

// 25. Use repeat() method to print 30 days of Javascript 2 times
// console.log(challenge.repeat(2));

