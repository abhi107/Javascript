const name = "Sam"
const repoCount = 50

console.log(name + repoCount + "value")

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Mario")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf(a));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sam   "
console.log(newStringOne)
console.log(newStringOne.trim())

console.log(gameName.split('-'))