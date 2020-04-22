// 'use strict';
// const myNumber = 42
// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber.toString());
// console.log(localStorage.getItem('number'));
// localStorage.clear();

// localStorage.setItem('key', JSON.stringify(object));

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
