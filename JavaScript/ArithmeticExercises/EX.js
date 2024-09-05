//Adding Numbers
const num1 = 8, num2 = 15;
console.log((num1 + num2));

//Substracting
const b = 30, a = 12;
console.log((b - a));

//Multiplying
const x = 7, y = 3;
console.log((x * y));

//Division
const a1 = 20, a2 = 4;
console.log((a1 / a2) + " " + (a1 % a2));

//Avarage
const number1 = 15, number2 = 25, number3 = 10;
console.log((number1 + number2 + number3) / 3);

//modolo
const value = 5;
console.log((value % 3));

//Even or odd
const v = 7;
console.log(v % 2 == 0 ? "even" : "odd");

// Divisibility Check
const n = 30;
console.log(n % 5 == 0 && n % 7 == 0 ? "true" : "false");

// Counting by Steps
let sum = 0;
for (let i = 0; i <= 20; i++){
    sum = i % 4 == 0 ? sum + i : sum;
}
console.log(sum);

// Logical AND Operator
const n1 = 50;
console.log(n1 >= 10 && n1 <= 30 ? "in the range" : "out of range");

// Logical OR Operator
const n2 = 50;
console.log(n2 > 10 || n1 < -5 ? "pass" : ":(");

// Logical NOT Operator
const isboolean = false;
console.log(!isboolean);

// Combining Logical Operators
const val = 7;
console.log((val > 5 && val < 10) || (val > 20 && val < 30) ? "yes he is" : "no he is");

