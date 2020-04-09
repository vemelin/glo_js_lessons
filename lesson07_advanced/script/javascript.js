'use sctrict';

// Create HTML elements
const   ul = document.createElement('ul'),
        body = document.body.append(ul);
        
        ul.classList.add('list');

let     weekDaysArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let     month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июль', 'Август', 'Сентябрь', 'Октябрь',' Ноябрь', 'Декабрь'];

let myDate = new Date();
let currentDay = new Date().getDay() - 1;

function createLi (textName) {
        
        let li, text, sort;
        
        sort = document.querySelector('.list');
        li = document.createElement('li');
        li.innerHTML = textName;
        sort.append(li);
        li.style.lineHeight = '1.5';
        li.style.listStyle = 'none';
};

for (let i = 0; i < weekDaysArray.length; i++) {

        if (i === currentDay) {

                if (weekDaysArray[i] === 'Суббота' || weekDaysArray[i] === 'Воскресенье') {

                        createLi(`<i> ⤏ ${weekDaysArray[i]} </i>`);
                        
                } else {

                        createLi(`<b> ⤏ ${weekDaysArray[i]} </b> <i> — Для справки сегодня ${myDate.getDate() + ' ' + month[myDate.getMonth()]}</i>`);

                }

        } else if (weekDaysArray[i] === 'Суббота' || weekDaysArray[i] === 'Воскресенье') {
                
                createLi(`<i> ⤏ ${weekDaysArray[i]} </i>`);
                
        } else {
                
                createLi(`⤏ ${weekDaysArray[i]}`);
        }

}