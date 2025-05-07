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
