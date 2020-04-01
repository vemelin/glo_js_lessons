'use strict';

// 1st task
let lang = prompt('Выберите язык используя короткие префиксы ru или en', '');

if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
} else if (lang === 'en') {
    console.log('Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday')
} else {
    console.log('По вашему запросу ничего не найдено');
}

switch(lang) {
    case ('ru'): 
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'); 
        break;
    case 
        ('en'): console.log('Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday'); 
        break;
    default: console.log('По вашему запросу ничего не найдено');
}

let langArray = new Map([
    ['ru', ['Понедельник, Вторник, Среда, Четверг, Пятница Суббота, Воскресение']],
    ['en', ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']],
]);

console.log(langArray.get(lang));

// 2nd task
let namePerson = prompt('Вас зовут Артем или Максим?', '');
(namePerson === 'Артем') ? console.log('Директор') :  
(namePerson === 'Максим') ? console.log('Преподаватель') :  
console.log('Студент');