// // // //
// // // function fromDollarToShilling(dollar) {
// // //   return dollar * 8600;
// // // }

// // // let shilling = fromDollarToShilling(10); //86000
// // // console.log(shilling);

// // // function increaseByHalf(number) {
// // //   return number / 2 + number;
// // // }

// // // let total = increaseByHalf(50);
// // // let total2 = increaseByHalf(100);
// // // console.log(total);
// // // console.log(total2);

// // // // BMI = mass / (height * height)

// // // //1. mohamed and ali BMI calculate

// // // function BMI(mass, height) {
// // //   return mass / (height * height);
// // // }

// // // let mohamedBMI = BMI(80, 1.8);
// // // let aliBMI = BMI(90, 1.9);

// // // console.log(mohamedBMI > aliBMI);

// // // //functions

// // // function displayName(name) {
// // //   //Task
// // //   console.log(name);
// // // }

// // // displayName("Fikrcamp"); //function calling
// // // displayName("Ali"); //function calling

// // // function addition(num1, num2) {
// // // //   return num1 + num2;
// // // // }

// // // // let sum = addition(10, 30); //40
// // // // console.log(sum);

// // // //TIP
// // // // 50 - 300 15%       300 > 20%

// // // function tipCalculator(bill) {
// // //   let tip;
// // //   if (bill > 50 && bill < 300) {
// // //     tip = bill * 0.15;
// // //     return bill + tip;
// // //   } else if (bill > 300) {
// // //     tip = bill * 0.2;
// // //     return bill + tip;
// // //   }
// // // }

// // // let totalBill = tipCalculator(250);
// // // console.log(totalBill);

// // // function inRange(num, from, to) {
// // //   if (num > from && num < to) {
// // //     console.log(`your number ${num} is between ${from} and ${to}`);
// // //   }
// // // }

// // // inRange(15, 11, 30);

// // function isNumber(number) {
// //   return typeof number === "number";
// // }

// // isNumber(20); //true
// // isNumber("20"); //false
// // isNumber(true); //false

// // let firstName = "abcd";

// // console.log(firstName[0]);

// // let age = 10;
// // if (age === 10) {
// //   console.log("age is equal to 10");
// // }

// // //Revision

// // // logical operators
// // //function

// // // &&   ||   !

// // let number = 0;

// // // 2 -20
// // if (number !== 2) {
// //   console.log("yes");
// // }

// // //function

// // function myName(name, age) {
// //   //task
// //   return `my name is ${name}, age is ${age}`;
// // }

// // let fikrcamp = myName("Firkcamp", 30); //my name is fikrcamp, age is 30

// // console.log(fikrcamp);
// // let ali = myName("Ali", 40); //my name is ali, age is 40
// // console.log(ali);

// // // Mass / height * height
// // function calcBMI(mass, height) {
// //   return mass / (height * height);
// // }

// // let mohamedBMI = calcBMI(89, 1.78);
// // let aliBMI = calcBMI(90, 1.9);

// // console.log(mohamedBMI > aliBMI);

// //Looping

// // for loop
// //1. varaible declare
// //2. condition
// //3. incre decre

// // i =5
// // for (let i = 1; i < 12; i++) {
// //   //tasks
// //   console.log(i++);
// // }

// // for (let i = 1; i < 10; i++) {
// //   //tasks
// //   console.log(++i);
// // }

// // for (let i = 20; i > 12; i++) {
// //   //tasks
// //   console.log(i * 2);
// // }

// //2 ,4 ,6 ,8 ,10

// // multiply(5);

// //for loop
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// //while loop
// let i = 1
// while(i<=5){
//   //task
//   console.log(i)
//   i++
// }

// //do while loop
// let j = 1;
// do {
//   //task
//   console.log(j);
//   j++;
// } while (j <= 5);

//ARRAYS

let firstName1 = "ahmed";
let firstName2 = "hassan";
let firstName3 = "ali";

firstName2 = "khalid";
// console.log(firstName2);

let firstName = ["ahmed", "hassan", "ali", "hussien", "john"];
firstName[2] = "khalid";
console.log(firstName[2]);

console.log(firstName.length);

for (let i = 0; i < firstName.length; i++) {
  console.log(firstName[i]);
}

const daysOfWeeks = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

for (let i = 0; i < daysOfWeeks.length; i++) {
  console.log(`${daysOfWeeks[i]} is day ${i + 1} of the week`);
}
// Satruday is day 1 of the week
// Sunday is day 2 of the week
// Monday is day 3 of the week
// Tuesday is day 4 of the week

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function workingDay(day) {
  return day + " is a working day";
}

function weekendDay(day) {
  return day + " is at the weekend!";
}

for (let i = 0; i < daysOfWeek.length; i++) {
  if (i < 5) {
    let day = workingDay(daysOfWeek[i]);
    console.log(day);
  } else {
    let day = weekendDay(daysOfWeek[i]);
    console.log(day);
  }
}

const a = 4;
const b = 8;

function multiplyNumbers(a, b) {
  return a * b;
}

function addNumbers(a, b, c) {
  return a + b + c;
}

for (let i = 0; i < 5; ++i) {
  if (i < 3) {
    const total = addNumbers(i, 2, a);
    console.log(total);
  } else {
    const total = multiplyNumbers(i, 4);
    console.log(total);
  }
}
