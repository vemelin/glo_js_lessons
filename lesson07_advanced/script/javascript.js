'use sctrict';

let weekDaysArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();

for (let i = 0; i < weekDaysArray.length; i++) {
  
    
    let currentDay = new Date().getDay() - 1;

    if (weekDaysArray[i] == 'Суббота' || weekDaysArray[i] == 'Воскресенье') {

            document.write(`<p><i>${weekDaysArray[i]}</i></p>`);

    } else if (i === myDate.getDay()) {

            document.write(`<p> <b>  ${weekDaysArray[myDate.getDay()]} </b> - <i> (Для справки сегодня ${myDate.getDate() + ' ' + months[myDate.getMonth()]} )</i></p>`);

    } else {

            document.write(`<p> ${weekDaysArray[i]} </p>`);

    }

}