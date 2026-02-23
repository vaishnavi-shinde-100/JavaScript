const value = 400;
//console.log(value);

const newValue = new Number(100); //specialy define number
//console.log(newValue);

// console.log(newValue.toString()); //convert into string
// console.log(newValue.toString().length); //3

const otherNumber = 123.2894;
//console.log(otherNumber);
//console.log(otherNumber.toPrecision(4)); //123.3

const num = 1000000;
//console.log(price.toLocaleString()) //this function add comas in number according to us number system
//console.log(num.toLocaleString("en-IN"));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString("en-IN"));

/* ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++ */

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.56));//its give roundof value
//console.log(Math.ceil(4.23)); //its always give max top value
//console.log(Math.floor(4.99000)) //its give lower value one digit value
// console.log(Math.min(2,5,8,10));
// console.log(Math.max(2,5,8,10));

console.log(Math.random()); //random hame zero or one(0-1) ke bich values deti hai
console.log(Math.random() * 10); //multiply with 10 because always return value in the form of decimal(0.1122588*10-1.1122588)
console.log(Math.random() * 10 + 1); //adding one for awaid zero
console.log(Math.floor(Math.random() * 10) + 1); //now floor give in one digit value

//when we want values between two numbers

const min = 10;
const max = 20;

const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomValue);
