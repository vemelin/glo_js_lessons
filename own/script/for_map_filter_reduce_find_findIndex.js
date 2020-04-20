'use strict';

//==== forEach advanced and short construction ============
// str.forEach(output);
// function output(item, index, array) {
// 	console.log(index, item);
// }
// str.forEach((item, index, array) => { console.log(index, item); } );

const people = [
	{ name: 'Narmina', age: 7, budget: 2000 },
	{ name: 'Amira', age: 2, budget: 1000 },
	{ name: 'Vasiliy', age: 35, budget: 5000 },
	{ name: 'Nargiza', age: 35, budget: 5000 }
];

// //For ===============
// for (let index = 0; index < people.length; index++) {
//   console.log(people[index].name, '>>', people[index].age);
// }

// //For Of ===============
// for (let output of people) {
//   console.log(output.name, '=', output.budget);
  
// }

//For Each ===============
// people.forEach(output => { console.log(output); });

// people.forEach(function(person){
// 	console.log(person.name, person.age);
// });

// people.forEach((item, index, array) => {
// 	console.log(index, item.name, item.age, item.budget);
// });

// // Map ===============
// // const newPeople = people.map(person => `${person.name} (${person.age})`);
// const newPeople = people.map(person => `${person.name} (${person.age * 3})`);
// console.log(newPeople);

// //Find ===============
// const lookingName = people.find(person => person.name === 'Amira');
// console.log(lookingName);

// //FindIndex ===============
// const lookingIndex = people.findIndex(person => person.name === 'Amira');
// console.log(lookingIndex);


// // Filter ===============
// const adults = [];
// for (let i = 0; i < people.length; i++) {
// 	if (people[i].age >= 18) {
// 		adults.push(people[i]);
// 		console.log(people[i]);
// 	}
// }
// console.log(adults);

// const adults = people.filter(person => {
// 	if (person.age >= 18) {
// 		return true;
// 	}
// });

// const adults = people.filter(person => person.age >= 18);
// const newResult = people.filter(output => output.budget > 1000);

// console.log(adults);
// console.log(newResult);

// //Reduce ===============
// // let amount = 0;
// // for (let i = 0; i < people.length; i++) {
// //   amount += people[i].budget;
// // }
// const amount = people.reduce((total, person) => total + person.budget, 0);
// // const amount = people.reduce((total, person) => {
// //   return total + person.budget;
// // }, 0);