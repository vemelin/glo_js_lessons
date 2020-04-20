// 'use strict';
// const myNumber = 42
// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber.toString());
// console.log(localStorage.getItem('number'));
// localStorage.clear();

// localStorage.setItem('key', JSON.stringify(object));

<<<<<<< Updated upstream
if (localStorage.getItem('bocolor') !== null) {
	const color = localStorage.getItem('bgcolor');
	document.body.style.background = color;
}

const object = {
	name: 'Max',
	age: 20
};

// localStorage.setItem('person', JSON.stringify(object));
const raw = localStorage.getItem('person');
const person = JSON.parse(raw);
// person.name = 'Vasiliy'
console.log(person);
=======
// const getArrayFromObject = localStorage.getItem('person')
// const results = JSON.parse(getArrayFromObject);

// const arr1 = [
//   ['test1', 'test2', 'test3', 'test4'],
//   [123, Number, false, true, 'test5', 'Value 1']
// ];
// const arr2 = [
//   ['value1', 'obj', 'results1', 'test10'],
//   [6456, 654564, 'Value 10']
// ];

// const arr3 = [...arr1, ...arr2];

// console.log({arr3});

// const numbers = [5, 37, 42, 17];
// // console.log(Math.max(5, 37, 42, 17));
// console.log(Math.max(...numbers));

//=====================================

// const div = document.querySelectorAll('div'); // Коллекция
// console.log(div); // Не массив
// const nodes = [...div]; // Spread используют для конвертации коллекции в массив
// console.log(nodes);
// console.log(div, Array.isArray(div));
// console.log(nodes, Array.isArray(nodes));

//=====================================

const sum = (a, b, ...rest) => { //Rest заполняет аргументами
  // console.log(...rest); //Spread массив строк  
  return a + b + rest.reduce((a, i) => a + i, 0);
};
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// // console.log(sum(...numbers));

// // const a = numbers[0]
// // const b = numbers[1]

// const [a, b, ...other] = numbers
// console.log('a', ...other, 'test', 1, false, true);

const person = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'Russia'
}

const {name, age, ...address} = person;
console.log(name, age, address);

>>>>>>> Stashed changes
