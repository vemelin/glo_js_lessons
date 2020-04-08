'use sctrict';

let weekDaysArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let myDate = new Date();
let currentDay = new Date().getDay() - 1;

for (let i = 0; i < weekDaysArray.length; i++) {
        
        if (i == currentDay) {

                if (weekDaysArray[i] === 'Суббота' || weekDaysArray[i] === 'Воскресенье') {

                        document.write(`<p><b><i>${weekDaysArray[i]}</i></b></p>`);
                        
                } else {

                        document.write(`<p> <b>  ${weekDaysArray[i]} </b> - <i> (Для справки сегодня ${myDate.getDate() + ' ' + months[myDate.getMonth()]} )</i></p>`);

                }

        } else if (weekDaysArray[i] === 'Суббота' || weekDaysArray[i] === 'Воскресенье') {
                
                document.write(`<p><i>${weekDaysArray[i]}</i></p>`);

        } else {
                
                document.write(`<p>${weekDaysArray[i]}</p>`);

        }

}