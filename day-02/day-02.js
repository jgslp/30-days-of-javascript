// 30 Days of Javascript: Day 02

// DAY 02 EXERCISES - LEVEL 1
// 1. Declare a variable named challenge and assign it to an initial value of "30 Days of Javascript";
// const challenge = "30 Days of JavaScript";

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

// EXERCISES - LEVEL 2
// 1. Use console.log() to print out the following statement:
// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Using console.log() print out the following quote by Mother Theresa:
// console.log("'Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'");

// 3. Check if typeof '10' is exactly equal to 10. If not make exactly equal. 
// console.log(typeof "10" == 10 ? true : false); // yields false
// console.log(parseInt("10") == 10 ? true : false); // yields true

// 4. Check if parseFloat('9.8') is equal to 10. If not make it exactly equal to 10.
// let num = 10;
// let parseNum = '9.8';


// console.log(num == parseNum ? true : false); // yields false
// console.log(num == Math.round(parseNum) ? true : false); // yields true


// 5. Check if "on" is found in both python and jargon. 
// let python = "python";
// let jargon = "jargon";
// let string = "on";

// console.log(python.includes(string) && jargon.includes(string) ? true : false); // yields true

// 6. I hope this course is not full of jargon. CHeck if jargon is in the sentence.
// let sentence = "I hope this course is not full of jargon.";
// let word = "jargon";

// console.log(sentence.includes(word)); // yields true

// 7. Generate a random number between 0 and 100 inclusively.
// const random  = Math.floor(Math.random() * 101);
// console.log(random);

// 8. Generate a random number between 50 and 100 inclusively.
// let random = Math.floor((Math.random() * 51) + 50);
// console.log(random);

// 9. Generate a random number between 0 and 255 inclusively.
// Math.floor(Math.random() * (max - min + 1) - min);
// const num  = Math.floor(Math.random() * 256);
// console.log(num);

// 10. Access the 'JavaScript' string characters using a random number.
// let string = 'Javascript';
// let random = Math.floor(Math.random() * (string.length - 0 + 1) - 0);

// console.log(string[random]);

// 11. Use the console.log() and escape characters to print a pattern 
// \n: new line; \t: Tab/8 spaces; \\: back slash; \' single quote; \" double quote;
// let string = "1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125";
// console.log(string);

// 12. Use substr to slice out the phrase because because because from sentence
// let sentence = "You cannot end a sentence with because because because is a conjunction";
// let first = sentence.indexOf("because");

// console.log(sentence.substr(first, 23)); 

// LEVEL 3 EXERCISES
// 1. Count the number of word love in sentence below:
// let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
// let array = sentence.match(/love/gi); 

// console.log(array.length); // returns 3

// 2. Use match() to count the number of all because
// let sentence = "You cannot end a sentence with because because because is a conjunction";
// let array = sentence.match(/because/gi);
// console.log(array.length); // returns 3

// 3. Clean the following text and find the most frequent word 
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// Could use below to remove special characters one by one
// let sentencePer = sentence.replace((/%/g), "");
// let sentenceAmp = sentencePer.replace((/&/g), "");
// let sentencePound = sentenceAmp.replace((/#/g), "");
// let sentenceAt = sentencePound.replace((/@/g), "");
// let sentenceCleaned = sentenceAt.replace((/\$/g), "");
// console.log(sentenceCleaned);

// More efficient: show only characters you want to include:
let cleaned = sentence.replace((/[^0-9a-zA-Z\.\,\!\?\ ]+/g), "");

// Create array split by words
let array = cleaned.split(" ");

console.log(array);

// 4. Calculate the total annual incomce of the person by extracting the numbers from the following text:
// let text = "He earns a 5000 euro from salary per month, 10000 euro annual bonus, 150000 euro online courses per month.";
// let regEx = /\d+/g;
// let extractedArray = text.match(regEx);

// let monthlySalary = parseInt(extractedArray[0]) * 12;
// let annualBonus = parseInt(extractedArray[1]);
// let monthlyCourses = parseInt(extractedArray[2]) * 12;

// let annualSalary = monthlySalary + annualBonus + monthlyCourses;
// console.log(annualSalary);