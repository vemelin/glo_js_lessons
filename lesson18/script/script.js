'use strict';
window.addEventListener('DOMContentLoaded', () => {

	function countTimer(deadline) {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		function getTimeRemaining() {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);

			return { timeRemaining, hours, minutes, seconds };
		}

		const format = value => { if (value < 10) { value = '0' + value; } return value; };

		function updateTime() {
			const timer = getTimeRemaining();
			timerHours.textContent = format(timer.hours);
			timerMinutes.textContent = format(timer.minutes);
			timerSeconds.textContent = format(timer.seconds);
			if (timer.timeRemaining > 0) {
				setTimeout(updateTime, 1000);
			} else {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
			}
		}
		updateTime();
	}
	countTimer('31 January 2021');
});

// let date = new Date('1984 January 31');
// // let date = new Date('1984, 01, 31');
// const date = new Date(1984, 0, 31, 3, 31, 31, 31);
// const date = new Date();

// // date.setFullYear(1984, 0, 31);
// date.setMonth(0, 31);
// date.setMonth(0);//Set January
// date.setDate(1);
// date.setHours(10);
// date.setMinutes(10);
// date.setSeconds(10);

// console.log('год ' + date.getUTCFullYear());
// console.log('месяц ' + (date.getUTCMonth() + 1));
// console.log('день ' + date.getUTCDate());
// console.log('День недели  ' + date.getUTCDay());
// console.log('Час  ' + date.getUTCHours());
// console.log('Минуты  ' + date.getUTCMinutes());
// console.log('Секунды  ' + date.getUTCSeconds());
// Map
// const newPeople = people.map(person => `${person.name} (${person.age})`);
// const newPeople = people.map(person => `${person.name} (${person.age * 3})`);
// console.log(newPeople);

// Filter
// const adults = people.filter(person => person.age >= 18);
// const newResult = people.filter(output => output.budget > 1000);

//===== 1 Lesson — 6 lines ======================
// const number = 266219,
// 	arr = String(number).split('');
// let output = 1;
// arr.forEach(item => { output *= item; });
// const result = String(output ** 3);
// console.log(result.substr(0, 2));


//======== forEach, Map, Filter, Reduce, find, findIndex =========
// const people = [
// 	{ name: 'Narmina', age: 7, budget: 2000 },
// 	{ name: 'Amira', age: 2, budget: 1000 },
// 	{ name: 'Vasiliy', age: 35, budget: 5000 },
// 	{ name: 'Nargiza', age: 35, budget: 5000 }
// ];

// const data = people
// 	.filter(person => person.budget > 1000)
// 	.map(person => ({
// 		info: `${person.name}(${person.age})`,
// 		budget: Math.sqrt(person.budget)
// 	}))
// 	.reduce((total, person) => total + person.budget, 0);

// console.log(data);

// let [age, height, grade] = [16, 170, 22];

// console.log(grade);


//////// ===========
// const count = 0, getMessage = name => { console.log(`Hello ${name}!`); },
// 	idInterval = setInterval(getMessage, 1000, 'Vasiliy');

// setTimeout(() => clearInterval(idInterval), 3000);

// const idTimeout = setTimeout(getMessage, 5000, 'Ivan');
// clearInterval(idInterval);
