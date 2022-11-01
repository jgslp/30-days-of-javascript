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

// Exercises Level 2

// 1. Write a script that prompts the user to enter base and height of a triangle and calculate an area of a triangle (area = 0.5 x b x h)
// let base = prompt('Enter triangle base length');
// let height = prompt('Enter triangle height length');

// console.log("The area of the triangle is", base * height * 0.5);
// Tried in console, prompts worked; entered 20, 10 and got 100 


// // 2. Write a script aht prompts the user to enter side a, side b, and side c of a triangle and calculate the perimeter of triangle.
// let sideA = prompt('Enter side a length');
// let sideB = prompt('Enter side b length');
// let sideC = prompt('Enter side c length');

// console.log("The perimiter of the triangle is "+ (parseInt(sideA) + parseInt(sideB) + parseInt(sideC)));

// Without parseInt it returns 543, using parseInt it returns 12

// 3. Get length and width using prompt and calculate an area of a rectangle and the perimieter
// let length = prompt('Enter height');
// let width = prompt('Enter width');

// console.log("The area of the rectangle is ", (length * width), " and the perimeter is ", (width * 2 + length * 2));

// 4. Get radius using prompt and calculate the area of a circle (area = pi * r * r) and circumference (c = 2 x pi x r) where pi = 3.14
// let pi = 3.14
// let radius = prompt('Enter radius');
// let area = pi * radius * radius;
// let circumference = 2 * pi * radius;

// console.log("The area of the circle is ", area, " and the circumference is ", circumference);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x - 2
// let y1 = 0;
// let x1 = (y1 + 2)/ 2;
// let x2 = 0;
// let y2 = (2 * 0) - 2;
// let m = (y2 - y1) / (x2 - x1);

// console.log("the slope is ", m, "; the x-intercept is ", x1, "; and the y-intercept is ", y2);

// // 6. Slope is m = (y2 - y1) / (x2 - x1). Find the slope between point (2, 2) and point (6, 10);
// let x3 = 2;
// let x4 = 6;
// let y3 = 2;
// let y4 = 10;
// let m2 = (y4 - y3) / (x4 - x3);

// console.log("the slope is", m2); // prints 2; correct

// 7. Compare the slope of above two questions
// console.log(m === m2);

// 8. Calculate the value of y(y = xsqd + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x = -3;
// let y = (x * x) + (6 * x) + 9;
// console.log(y);

// y is 0 when x = -3

// 9. Write a script that prompts a user to enter hours and rate per hour. Calculate the pay of the person.
// let hours = prompt('Enter hours here');
// let rate = prompt ('Enter rate per hour here');
// let weeklyEarning = hours * rate;

// console.log("weekly earning is ", weeklyEarning);

// 10. If the length of your name is greater than 7 say, your name is long, else say your name is short
// let name = "";
// if (name.length > 7) {
//     console.log("Your name is long");
// } else {
//     console.log("Your name is short");
// }

// 11. Compare your first name length and your family name length and you should get this output
// let firstName = "Jackie";
// let lastName = "Gellick";

// if (firstName.length > lastName.length) {
//     console.log("Your first name, ", firstName, "is longer than your family name, ", lastName );
// } else if (firstName.length < lastName.length) {
//     console.log("Your first name, ", firstName, "is shorter than your family name, ", lastName );
// } else {
//     console.log("Your first name ", firstName, "is the same length as your last name, ", lastName);
// }

// 12. Declare two variables myAge and yourAge and assign them initial values.
// let myAge = 33;
// let yourAge = 37;

// if (myAge == yourAge) {
//     console.log("We are the same age.");
// } else if (myAge > yourAge) {
//     console.log(`I am ${myAge - yourAge} years older than you.`);
// } else if (myAge < yourAge) {
//     console.log(`I am ${yourAge - myAge} years younger than you.`);
// }