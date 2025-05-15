"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // Variable is declared and initialized in the same line

if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; // 'interface' is a reserved keyword in JavaScript
// const private = 534; // 'private' is a reserved keyword in JavaScript
// const if = 23; // 'if' is a reserved keyword in JavaScript
// const function = 23; // 'function' is a reserved keyword in JavaScript
// const const = 23; // 'const' is a reserved keyword in JavaScript

// Funtion Declaration

function logger() {
  console.log("My name is Jonas");
}
logger(); // Calling the function
logger(); // Calling the function again
logger(); // Calling the function again

//Function Invoking, Calling, or Running
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOranjeJuice = fruitProcessor(2, 4);

console.log(appleOranjeJuice);

// Function Declaration vs Function Expression

// Function Declaration
function calAge(birthyear) {
  return 2037 - birthyear;
}
const ageNaveen = calAge(1991);

console.log(ageNaveen);

// Function Expression
const calAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const ageNaveen2 = calAge2(1991);
console.log(ageNaveen2);

// Arrow Function

const calAge3 = (birthyear) => 2037 - birthyear;
const ageNaveen3 = calAge3(1991);
console.log(ageNaveen3);

//Arrow Function with single parameter multiple lines
const calAge4 = (birthyear) => {
  const ageNaveen4 = 2037 - birthyear;
  const retirement = 65 - ageNaveen4;
  return retirement;
};

console.log(calAge4(1991));

// Arrow Function with Parameters

const YearsOfRetriement1 = (birthyear, lastName) => {
  const ageNaveen5 = 2037 - birthyear;
  const retirement = 65 - ageNaveen5;
  if (retirement > 0) {
    return `${lastName} retires in ${retirement} years`;
  } else {
    return `${lastName} has already retired`;
  }
};

const YearsOfRetriement2 = (birthyear, lastName) => {
  const ageNaveen5 = 2037 - birthyear;
  const retirement = 65 - ageNaveen5;
  return retirement <= 0
    ? `${lastName} has already retired`
    : `${lastName} retires in ${retirement} years`;
};

console.log(YearsOfRetriement1(1997, "Naveen"));
console.log(YearsOfRetriement1(1970, "Walter"));

console.log(YearsOfRetriement2(2000, "Ram"));
console.log(YearsOfRetriement2(2008, "Raju"));

//Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor1(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

console.log(fruitProcessor1(2, 3));

// Arrays

const friends = ["Naveen", "Walter", "Ravi", "Raju"];
console.log(friends);

const years = new Array(1991, 1992, 1993, 1994, 1995);
console.log(years[0]);
console.log(years[1]);

console.log(friends.length); // Length of the array
console.log(friends[friends.length - 1]); // Last element of the array
console.log(friends[friends.length - 2]); // Second last element of the array

const firstName = "Naveen";
const lastName = "Kumar";

const naveen = [firstName, lastName, 2025 - 1997, "Enginner", friends];

console.log(naveen);
console.log(naveen.length);

// Mutating and Changing Arrays
const calAgeee = function (birthyear) {
  return 2025 - birthyear;
};

const years1 = [1991, 1992, 1993, 1994, 1995];
const ages = [
  calAgeee(years1[0]),
  calAgeee(years1[1]),
  calAgeee(years1[years1.length - 1]),
];
console.log(ages);

// Array Methods
const friends1 = ["Naveen", "Walter", "Ravi", "Raju"];

friends1.push("White"); // Add element to the end of the array
// console.log(friends1);

console.log(friends1.push("Hanuman", "Ramji")); // Add multiple elements to the end of the array
// console.log(friends1);

friends1.unshift("Shyam"); // Add element to the beginning of the array
//console.log(friends1);

const popped = friends1.pop(); // Remove last element of the array
console.log(popped); // Print the removed element
console.log(friends1); // Print the array after removing the last element

const shifted = friends1.shift(); // Remove first element of the array
console.log(shifted); // Print the removed element
console.log(friends1); // Print the array after removing the first element

console.log(friends1.indexOf("Walter")); // Print the index of the element
console.log(friends1.includes("Kane"));
console.log(friends1.includes("Naveen")); // Check if the element is present in the array

if (friends1.includes("Naveen")) {
  console.log("You have a friend called Naveen");
}

//Objects in JavaScript

const person = {
  firstName: "Naveen",
  lastName: "Kumar",
  age: 2025 - 1997,
  job: "Engineer",
  friends: ["Naveen", "Walter", "Ravi", "Raju"],
};
console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person.job);
console.log(person.friends[0]);
console.log(person.friends[1]);
console.log(person.friends[2]);
console.log(person.friends[3]);
console.log(person.friends.length);
console.log(person.friends[person.friends.length - 1]); // Last element of the array
console.log(person.friends[person.friends.length - 2]); // Second last element of the array
console.log(person["friends"][0]);
console.log(person["friends"][1]);

// Object Methods
const Hisenberg = {
  firstName: "Walter",
  lastName: "White",
  birthYear: 1990,
  job: "Chemist",
  friends: ["Naveen", "Pinkman", "Saul"],
  hasDriversLicense: true,

  calAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  summmary: function () {
    return `${this.firstName} is a ${this.calAge()} years of old ${
      this.job
    }, and he has ${this.friends.length} friends, and his best friend is ${
      this.friends[0]
    } and he has a driver's license: ${this.hasDriversLicense ? "Yes" : "No"}`;
  },
};

console.log(Hisenberg.summmary());
console.log(Hisenberg.calAge());
console.log(Hisenberg.age);



// For Loops
//For loop repeates a block of code to set number of times

for (let a=1; a<=10;a++){
  console.log(`count ${a}`);
}

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//Print RIght Angle Triangle

let rows=5;

for(let i=1;i<=rows;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern += '*' ;
    }
    console.log(pattern);
}


//Reverse Array

let num = [1, 2, 3, 4, 5];

for (let i = num.length-1; i>=0 ;i--){
    console.log(num[i]);
}


//Reverse an array 
let fruits =["apple", "banana", "orange","grapes"];
for (let i=fruits.length-1;i>=0;i--){
    console.log(fruits[i]);
}

//Reverse Array
let arr=[10, 20, 30, 40, 50];

for(let i = arr.length-1;i>=0 ;i--){
    console.log(arr[i]);
}

//Reverse and store in a new array
let arr1=[1, 2, 3, 4];
let arr2 =[];
let k=0;

for(let i = arr1.length-1;i>=0 ;i--){
   arr2[k]=arr1[i];
   k++;
}
console.log(arr2);



//Reverse and store in a new array
let array1 =[4,6,7,2,4,6];
let array2 =[];
let l=0;

for(let i =array1.length-1;i>=0 ;i--){
   array2[l]=array1[i];
   l++;
}
console.log(array2);


//Reverse Array

let array4 =[100,200,300];
let array5 = [];

for(let i = array4.length-1, j = 0; i >=0; i--, j++) {
    array5[j]=array4[i];
}
console.log(array5);
console.log(array4);




