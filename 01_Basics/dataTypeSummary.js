/* Data Types */

//   #Primative
// Primative - primative is always a call by value
//7 types - String, Number, Boolean, Undefined, Null, BigInt, Symbol(used for unique)

let name = "vaishnavi shinde" //string
let score = 100 //number
let scoreValue = 100.16 //number
let city; //undefined
let isLogged = true; //boolean
let tempreture = null //object

let id = Symbol('123') 
let anotherId = Symbol('123')
//console.log(id === anotherId) //false

//const bigNumber = 123458954614887441n //BigInt

//console.log(typeof id) //symbol

//   #Non Primative
//Reference(Non Primative - call by reference)
//Arrays, Functions, Objects

let hores = ["shaktiman","Atim","Nagraj"]; 

let greet =  function greeting() {
    console.log("Good Luck for your coding journey");
}
//greet()//funtion call

let objectVariable = {
    name : "Vaishnavi Shinde",
    age : 20,
    city : "Burhanpur"
};

// console.log(typeof hores) //object
// console.log(typeof greet); //function
// console.log(typeof objectVariable) //object


/* DataType */

//"vaishnavi" => String
//123 => Number
//12.58 => Number
//Boolean => boolean
//Symbol => Symbol
//null => Object
//undefined => undefined
//arrays => Object
//functions => function
//object => object

/* ----------------Stack And Heap-------------------------*/

//data store in the form of stack and heap

//primitive data type store in stack - stack pass value(copy of value not original value)
//non primitive data type store in heap - heap pass reference(pass original value)

let accountName = "vaishnavi@gmail.com";

let anotherAccount = accountName;
anotherAccount = "vaishnavishinde@gmail.com"

// console.log(accountName);
// console.log(anotherAccount);

let objOne = {
    name : "vaishnavi",
    email : "vaishnavi@google.com"
};

let objTwo = objOne;
objTwo.email = "vaishnavishinde@google.com";

console.log(objOne.email);
console.log(objTwo.email);




