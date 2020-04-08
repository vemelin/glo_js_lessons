'use sctrict';

// Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице

// 1) Выведите на страницу текущую дату и время в 2-х форматах: 

//     a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  (1 БАЛЛ)

//     б) '04.02.2020 - 21:05:33' (1 БАЛЛ)

// 2) Для вывода в формате (а) напишите функцию, которая будет менять менять склонение слов в 
//    зависимости от числа, "час, часов, часа"

// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями 
//    которые состоят из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)

// 4) С помощью функции setInterval, реализуйте вывод даты и времени каждую секунду (1 БАЛЛ)

// const dateObj = new Date('02-22-2020');

// const dtf = new Intl.DateTimeFormat('ru', { 
//         year: 'numeric', 
//         month: 'short', 
//         day: '2-digit' });

// const [
//         { value: date },,
//         { value: month },,
//         { value: year }
//     ] = dtf.formatToParts(dateObj);

// console.log(`Сегодня - ${date}-${month}-${year}`);

// const dateObj = new Date('02-22-2020');

// const dtf = new Intl.DateTimeFormat('ru', { 
//         day: 'numeric',
//         date: '2-digit',
//         month: 'mmmm dS',
//         year: 'yyyy', 
//         time: 'h:MM:ss TT' });

// const [
//         { value: day },,
//         { value: date },,
//         { value: month },,
//         { value: year },,
//         { value: time }
//     ] = dtf.formatToParts(dateObj);

// console.log(`Сегодня - ${day} - ${date}-${month}-${year}-${time}`);

//'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  (1 БАЛЛ)
let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

           
             
let myDate = new Date();
let fullDate = 'Сегодня '  + days[myDate.getDay()] + ', ' + myDate.getDate() + " " + myDate.getMonth() + 
                " " + myDate.getFullYear();

document.write(fullDate);

// var dateFormat = Date('dddd, mmmm dS, yyyy, h:MM:ss TT');
// console.log(dateFormat);

// document.write (date);





// let weekDaysArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
//             "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();

// for (let i = 0; i < weekDaysArray.length; i++) {
  
    
//     let currentDay = new Date().getDay() - 1;

//     if (weekDaysArray[i] == 'Суббота' || weekDaysArray[i] == 'Воскресенье') {

//             document.write(`<p><i>${weekDaysArray[i]}</i></p>`);

//     } else if (i === myDate.getDay()) {

//             document.write(`<p> <b>  ${weekDaysArray[myDate.getDay()]} </b> - <i> (Для справки сегодня ${myDate.getDate() + ' ' + months[myDate.getMonth()]} )</i></p>`);

//     } else {

//             document.write(`<p> ${weekDaysArray[i]} </p>`);

//     }

// }