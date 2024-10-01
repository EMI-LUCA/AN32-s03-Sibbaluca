let name;
console.log(name);

let productname = 'desktop computer';
console.log(productname);

let supplier;
supplier = "Fernandez System Consulting Group";
console.log(supplier);

/*
a = 5;
console.log(a);
var a;

a = 5;
console.log(a);
let a;

*/

let outerVariable = 'hello';
{
	var innerVariable = 'hi'
}

console.log(outerVariable)
console.log(innerVariable)

let productCode = 'DC01'; const productBrand = 'Dell';
console.log(productCode, productBrand)

let country = 'Philippines';
let province = 'Manila';


//concatinating  string
let fullAddress = province + ' ' + country;
console.log(fullAddress)

// template literal `${variableName}`
let address = `${province} ${country}`;
console.log(address)

let greeting = `I live in the ${province} ${country}`;
console.log(greeting)

// the escape character (\) in strings in combination with other characters can produce different effects
let mailAddress = 'Metro Manila \n\n Philippines';
console.log(mailAddress)

let message = "john's employee went home early";
console.log(message)

message = 'john\'s employee went home early';
console.log(message)

 let headcount = 26;
 console.log(headcount)

 let grade = 98.7;
 console.log(grade)

 let planetDistance = 2e10;
 console.log(planetDistance)

 let isMarried = false;
 let inGoodConduct = true;
 console.log("isMarried: " + isMarried)

 let grades = [88, 98, 90, 76, 100];
 console.log(grades)

 let details = ['Juan', 35, true]
 console.log(details)

 let person = {
 	fullName: 'Juan Dela Cruz',
 	age: 35,
 	isMarried: true,
 	contactNumber: ['092342891145346','019481234211246'],
 	address:{
 		houseNumber: '4',
 		city: 'Metro Manila'
 	}
 }
 console.log(person)

let spouse = null;
console.log(null)

let adress1;