// 30 DAYS OF JAVASCRIPT - DAY 08

// EXERCISES: LEVEL 1

// // 1. Create an empty object called dog
// const dog = {};

// // 2. Print the dog object on the console
// // console.log(dog);

// // 3. Add name, legs, color, age, and bark properties for the dog object. 
// // The bark property is a method which returns woof woof

// dog.name = "Winston";
// dog.legs = 4;
// dog.color = "brown";
// dog.age = 8;
// dog.bark = function() {return "woof woof"};
// console.log(dog.bark());

// // 4. Get name, legs, color, age, and bark value from the dog object
// console.log(Object.values(dog));

// // 5. Set new properties for the dog object: breed, getDogInfo
// dog.breed = "poodle";
// dog.getInfo = function() {
//     console.log(`${dog.name} is a ${dog.color} ${dog.breed} with ${dog.legs} legs who is ${dog.age} years old and says ${dog.bark()}`);
// }

// console.log(dog.getInfo());

// EXERCISES LEVEL 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 1. Find the person who has many skills in the users object
// let most = 0;
// let mostSkills = "";
// for (let user in users) {
//     if (users[user].skills.length > most) {
//         most = users[user].skills.length;
//         mostSkills = user;
//     }
// }

// console.log(mostSkills);

// 2. Find the people who are MERN stack developers from the users object
// let mernUsers = "MERN users are: ";
// for (let user in users) {
//     if (users[user].skills.includes('MongoDB') && 
//         users[user].skills.includes('Express') &&
//         users[user].skills.includes('React') &&
//         users[user].skills.includes('Node')) {
//             mernUsers += user + ", ";
//         }
// }

// console.log(mernUsers);
