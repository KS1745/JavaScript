/*
let js = 'amazing';
console.log(40+8-23-10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";


console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3;
// let jonas&matilda = "JN";

let jonas_matilda = "JM";
let $function = 27;

let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'Teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun );
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;  //mutate the variable

const birthYear = 1991; // immutable variable we can't reassign  const variable
//birthYear = 1990;

// const job;  // we can't declare empty const variable

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++;    // x = x + 1
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2020 );


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2020 );

console.log(25-10-5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

//Template Literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


const age = 15;

//Control Structure
if ( age >= 18 ) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2021;
let century;
if(birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}
console.log(century);


//Type Coercion: means JS automatically converts behind the scene for us

//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23),23);

//Type Coercion: means JS automatically converts..behind the scene for us
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);  // - operator is just opposite of + operator
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;  // '11'
n = n - 1;
console.log(n);

console.log(2+3+4+'5');
console.log('10'-'4'-'3'-2+'5');


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 0;
if(height){
  console.log("YAY! height is defined");
} else {
  console.log("Height is Undefined");
}
*/

const age = '18';
if(age === 18) {
  console.log('You just became an adult (strict)');
}

if(age == 18) {
  console.log('You just became an adult (loose)');
}

const favourite = Number(prompt("What's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7 ) {
  console.log('7 is also a cool number');
} else if (favourite === 9){
  console.log('9 is alse a cool number');
}
else {
  console.log('Number is not 23 or 7');
}

if (favourite != 23) console.log('Why not 23?');