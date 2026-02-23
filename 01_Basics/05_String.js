let name = "Vaishnavi"
let repoCount = 6

// console.log(name + repoCount+" value");
console.log(`My name is ${name}, and my repocount is ${repoCount}`);

const gameName = new String("VaishnaviS")
// console.log(gameName[0]);
// console.log(gameName);
// console.log(gameName.length);
// console.log(typeof gameName);  //object
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(1));  //a
// console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,5); //end length se ek kam print hota hai - vaish
console.log(newString);

const anotherString = gameName.slice(5); //print character after index 5
console.log(anotherString);

const anotherString2 = gameName.slice(-9,5); //negative means start from end
console.log(anotherString2);

const userName = "       vaishnavi    "
console.log(userName);

console.log(userName.trim()); //trim use for remove extra spaces

const url = "https//:google.com/vaishnavi%20shinde"
console.log(url.replace('%20','-')) //it replace the specific part of string

console.log(url.includes('vaishnavi')) //include check the value is present in the string or not
console.log(url.includes('Goodmorning'))

const newName = "vaishnavi-shinde-100"
console.log(newName.split('-')) //split seperate the string