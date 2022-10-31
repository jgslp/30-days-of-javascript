// 30 DAYS OF JAVASCRIPT DAY 03

// Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it adn use the typeof operator to check different data types.

// let firstName = "Jackie";
// let lastName = "Gellick";
// let country = "Spain";
// let city = "Bilbao";
// let age = 33;
// let isMarried = true;
// let year = 2022;

// console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// 2. Check if '10' is equal to 10.

// console.log('10' === 10); // yields false;
// console.log('10' == 10); // yields true;

// 3. Check if parseInt('9.8') is equal to 10;

// console.log(parseInt('9.8') === 10); // yields false

// 4. Boolean value is eitehr true or false. 
// Write three Javascript statements which provide a truthy value.
// Write three Javascript statements which provide a falsy value.

// console.log(3 === 6/2); // yields true
// console.log(10 >= 8); // yields true
// console.log(3 == "3"); // yields true
// console.log(10 === null); // yields false
// console.log(5 > 10); // yields false
// console.log(3 === "three"); // yields false

// 5. Figure out the result of the following comparison expression first wihtout using console.log, then confirm it with console.log
// i. (4 > 3) should yield true
// console.log(4 > 3); // true; correct
// // ii. (4 >= 3) should yield true
// console.log(4 >= 3); // true, correct
// // iii. (4 < 3) should yield false
// console.log(4 < 3); // false, correct
// // iv. (4 <= 3) should yield false
// console.log(4 <= 3); // false, correct
// // v. (4 == 4) should yield true
// console.log(4 == 4); // true, correct
// // vi. (4 === 4) should yield true
// console.log(4 === 4); // true, correct
// // vii. (4 != 4) should yield false
// console.log(4 != 4); // false, correct
// // viii. (4 !== 4) should yield false
// console.log(4 !== 4); // false, correct
// // ix. (4 != '4') should yield false
// console.log(4 != '4'); // false, correct
// // x. (4 == '4) should yield true
// console.log(4 == '4'); // true, correct
// // xi. (4 === '4') should yield false
// console.log(4 === '4'); // false, correct
// // xii. find the length of python and jargon and make a falsy comparison statement
// let python = "python";
// let jargon = "jargon";
// console.log(python.length > jargon.length); // yields false

// // 6. Figure out the result of the following expressions first without using the console.log. Then confirm it by using the console.log().
// // i. (4 > 3 && 10 < 12); // should yield true
// console.log(4 > 3 && 10 < 12); // true, correct
// // ii. (4 > 3 && 10 > 12); // should yield false
// console.log(4 > 3 && 10 > 12); // false, correct
// // iii. (4 > 3 || 10 < 12); // should yield true
// console.log(4 > 3 || 10 < 12); // true, correct
// // iv. (4 > 3 || 10 > 12); // should yield true
// console.log(4 > 3 || 10 > 12); // true, correct
// // v. !(4 > 3); // should yield false 
// console.log(!(4 > 3)); // false, correct
// // vi. !(4 < 3); // should yield true
// console.log(!(4 < 3)); // true, correct
// // vii. !(false); // should yield true 
// console.log(!false); // true, correct
// // viii. !(4 > 3 && 10 < 12); // should yield false
// console.log(!(4 > 3 && 10 < 12)); // false, correct
// // ix. !(4 > 3 && 10 > 12); // should yield true
// console.log(!(4 > 3 && 10 > 12)); // true, correct
// // x. !(4 === '4'); // should yield true
// console.log(!(4 === '4')); // true, correct
// // xi. There is no "on" in both dragon and python // should yield false
// let dragon = "dragon";
// let python = "python";
// console.log(!(dragon.includes("on") && python.includes("on"))); // yields false

// 7. Use the Date object to do the following activities:
// const now = new Date(); // returns 2022-10-31T16:14:10.700Z

// // i. What is the year today?
// console.log(now.getFullYear()); // returns 2022
// // ii. What is the month today as a number?
// console.log(now.getMonth()); // returns 9, (months are 0-11)
// // iii. What is the date today?
// console.log(now.getDate()); // returns 31 (days are 1-31)
// // iv. What is the date today as a number?
// console.log(now.getDay()); // returns 1 (today is Monday)(Sunday 0 Saturday is 7)
// // v. What is the hours now?
// console.log(now.getHours()); // returns 17: it is 17:17 
// // vi. What is the minutes now?
// console.log(now.getMinutes()); // returns 17; it is 17:17
// // vii. Find out the numbers of seconds elapsed from January 1, 1970 to now. 
// console.log(now.getTime()); // returns 1667233120687



