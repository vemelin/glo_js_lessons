/* eslint-disable prefer-const */
'use strict';

// let Name = () => {};
// function Name() {};

// () => {};
// function() {};

// let test = (a, b, c, ...arr) => {
// 	console.log(a, b, c);
// 	console.log(arr);
// };

// test('red', 2, 22, 'black', [], true, 9);

// let options = document.querySelectorAll('option'),
// 	optionsArr = [...options];
// console.log(options);
// console.log(optionsArr);
// console.log(...options);


// const arr = [['text1', 'text2'], ['text3', 'text4'], 'text5'];

// const [[a, b], [c, d], e = 'text5-1'] = arr;

// console.log(a,  { b }, [c], [d], e);

// const arr3 = {
// 	test1: '1',
// 	test2: 20,
// 	test3: 3,
// 	testObj: {
// 		test4: ['inside1', 'inside2'],
// 		test5: ['inside3', 'inside4'],
// 	}
// };
// const { test2 = 'nupizdez', test3, testObj: { test4: [text1, text2], test5: [text3, text4] } } = arr3;
// console.log(test2, test3, text1, text2, text3, text4);

// console.log({ test2, test3, testObj: { test4: [text1, text2], test5: [text3, text4] } });

// const car = 'hyundai', cycle = 'bmx', bike = 'honda';
// const transport = { car, cycle, bike, ride() { console.log('go ride') } };
// console.log(transport);
// transport.ride();

// const obj1 = {
// 	value1: 'test 1',
// 	value2: 'test 2',
// 	value3: 'test 3',
// };

// const obj2 = {
// 	value3: 'test 4', // после асайна мы перезаписываем value 3 в первом объекте
// 	value5: 'test 5',
// 	value6: 'test 6',
// 	value7: 'test 7',
// };
// //Присвоить значения obj2 > obj1
// //Object.assign(obj1, obj2);

// // const obj3 = Object.assign(obj1, obj2);
// // obj3.value8 = 'test 8';
// obj2.value10 = 'test 10';
// const ship = 'ship';
// const obj4 = {...obj1, ...obj2, ship, ride(){console.log('go ride')}};
// obj4.ride();
// console.log(obj4);

const map = new Map([
	[1984, 'vasya'],
	['He', 'is 35 years old'],
]);

map.set('car', { brand: 'mazda', moderl: '3' })
	.set(777, 'asdfadsf')
	.set(null, 'asdfasdf')
	.set(NaN, 'asdfasdf')
	.set(undefined, 'asdfasdf');

const obj = {
	name: 'Max',
	age: 30,
};


const func = () => {
	console.log('go vasya');
};

map.set(obj, 123)
	.set(func, 'you');


// console.log(map.get(func));
// console.log(map.has(NaN));
//console.log(map.size);

const collectMap = new Map([
	['Hello', 'world!'],
	['year', 2020]
]);

collectMap.delete('year');

const arr = Array.from(map);

console.log(arr);

// map.forEach((value, key) => {
// 	console.log(`${value}: ${key}`);
// });

// for(let [key, value] of map) {
//   console.log(`----------`);
//   console.log(`${value}: ${key}`);
// }


const vehicle = new Set();

// vehicle.add('test 1');
// vehicle.add('test 2');
// vehicle.add('test 3');
// vehicle.add(['test 4', 'value 4']);

vehicle.add('test 1')
.add('test 2')
.add('test 3')
.add('test 4', 'value 4');

console.log(vehicle);
console.log(vehicle.size);