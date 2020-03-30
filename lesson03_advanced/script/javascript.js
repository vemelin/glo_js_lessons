'use strict';

// 1st task
let lang = prompt('Выберите язык используя короткие префиксы ru или en', '');
(lang == 'ru') ? console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье') :  
(lang == 'en') ? console.log('Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday') :  
console.log('По вашему запросу ничего не найдено');

// 2nd task
let namePerson = prompt('Вас зовут Артем или Максим?', '');
(namePerson == 'Артем') ? console.log('Директор') :  
(namePerson == 'Максим') ? console.log('Преподаватель') :  
console.log('Студент');