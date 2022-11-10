// 30 DAYS OF JAVASCRIPT - DAY 08

// EXERCISES: LEVEL 1

// 1. Create an empty object called dog
const dog = {};

// 2. Print the dog object on the console
// console.log(dog);

// 3. Add name, legs, color, age, and bark properties for the dog object. 
// The bark property is a method which returns woof woof

dog.name = "Winston";
dog.legs = 4;
dog.color = "brown";
dog.age = 8;
dog.bark = function() {return "woof woof"};
console.log(dog.bark());

// 4. Get name, legs, color, age, and bark value from the dog object
console.log(Object.values(dog));

// 5. Set new properties for the dog object: breed, getDogInfo
dog.breed = "poodle";
dog.getInfo = function() {
    console.log(`${dog.name} is a ${dog.color} ${dog.breed} with ${dog.legs} legs who is ${dog.age} years old and says ${dog.bark()}`);
}

console.log(dog.getInfo());