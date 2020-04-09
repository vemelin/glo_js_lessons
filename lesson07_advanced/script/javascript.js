'use sctrict';

// Create HTML elements
const   ul = document.createElement('ul'),
        body = document.body.append(ul);
        
        ul.classList.add('list');

let     weekDaysArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let     month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июль', 'Август', 'Сентябрь', 'Октябрь',' Ноябрь', 'Декабрь'];

let myDate = new Date();

function createLi (textName) {
        
        let li, sort;
        
        sort = document.querySelector('.list');
        li = document.createElement('li');
        li.innerHTML = textName;
        sort.append(li);
        li.style.lineHeight = '1.5';
        li.style.listStyle = 'none';

};

console.log(myDate.getDay());

for (let i = 0; i < weekDaysArray.length; i++) {

        // if (weekDaysArray[i] === 'Суббота' || weekDaysArray[i] === 'Воскресенье') {

        //         createLi(`<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${weekDaysArray[i]} </i>`);

        // } else if (weekDaysArray[i] === myDate.getDay()) {
                
        //         createLi(`<b> ⤏ &nbsp;${weekDaysArray[i]} </b> <i> — Для справки сегодня ${myDate.getDate() + ' ' + month[myDate.getMonth()]}</i>`);

        // } else {

        //         createLi(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${weekDaysArray[i]}`);

        // }

        if (i == myDate.getDay()) {

                if (weekDaysArray[i] === 'Суббота' || weekDaysArray[i] === 'Воскресенье') {

                        createLi(`<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${weekDaysArray[i]} </i>`);
                        
                } else {

                        createLi(`<b> ⤏ &nbsp;${weekDaysArray[i]} </b> <i> — Для справки сегодня ${myDate.getDate() + ' ' + month[myDate.getMonth()]}</i>`);

                }

        } else if (weekDaysArray[i] === 'Суббота' || weekDaysArray[i] === 'Воскресенье') {
                
                createLi(`<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${weekDaysArray[i]} </i>`);

                if (weekDaysArray[i] === 'Воскресенье'){
                        ///createLi(`<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${weekDaysArray[i]} </i>`);
                }
                
        } else {
                
                createLi(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${weekDaysArray[i]}`);
        }

        
}

function moveSandayToEndList () {

        let     collection = document.querySelectorAll('ul'),
                sort = document.querySelectorAll('li');
                collection[0].appendChild(sort[0]);
};

moveSandayToEndList();
