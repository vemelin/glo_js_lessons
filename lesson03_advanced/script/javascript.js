'use strict';

// 1st task
let lang = prompt('Выберите язык используя короткие префиксы ru или en', '');

// if (lang == 'ru') {
//     console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
// } else if (lang == 'en') {
//     console.log('Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday')
// } else {
//     console.log('По вашему запросу ничего не найдено');
// }

// switch(lang) {
//     case (lang = 'ru'): 
//         console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'); 
//         break;
//     case 
//         (lang = 'en'): console.log('Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday'); 
//         break;
//     default: console.log('По вашему запросу ничего не найдено');
// }

// let ru = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
// let en = 'Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday';

// let myArray = [ru, en];

// console.log();

lang = [
    'ru': 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье', 
    'en': 'Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday' 
] 


function first(y){
    console.log(0);
    y();
}
function second(){
    console.log(1);
}
first(second);

let ru = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let en = 'Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday';

let myArray = [ru, en];

console.log(myArray[1]);


// 2nd task
let namePerson = prompt('Вас зовут Артем или Максим?', '');
(namePerson == 'Артем') ? console.log('Директор') :  
(namePerson == 'Максим') ? console.log('Преподаватель') :  
console.log('Студент');