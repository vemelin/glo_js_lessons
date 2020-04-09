'use sctrict';

// Create HTML elements
const   ul = document.createElement('ul'),
        body = document.body.append(ul);
        
        ul.classList.add('list');

let     weekDaysArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let     month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июль', 'Август', 'Сентябрь', 'Октябрь',' Ноябрь', 'Декабрь'];

let myDate = new Date();

// Create list
function createLi (textName) {
        
        let li, sort;
        
        sort = document.querySelector('.list');
        li = document.createElement('li');
        li.innerHTML = textName;
        sort.append(li);
        li.style.lineHeight = '1.5';
        li.style.listStyle = 'none';

};

// Iteration cicle of creating the Day list and conditions to show the currend day
for (let i = 0; i < weekDaysArray.length; i++) {

        if (i == myDate.getDay()) {

                if (weekDaysArray[i] === 'Суббота' || weekDaysArray[i] === 'Воскресенье') {

                        createLi(`<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${weekDaysArray[i]} </i>`);
                        
                } else {

                        createLi(`<b> ⤏ &nbsp;${weekDaysArray[i]} </b> <i> — Для справки сегодня ${myDate.getDate() + ' ' + month[myDate.getMonth()]}</i>`);

                }

        } else if (weekDaysArray[i] === 'Суббота' || weekDaysArray[i] === 'Воскресенье') {
                
                createLi(`<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${weekDaysArray[i]} </i>`);
                
        } else {
                
                createLi(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${weekDaysArray[i]}`);
        }

        
}

// Move Suday, first child element to the end
function moveSandayToEndList () {

        let     collection = document.querySelectorAll('ul'),
                sort = document.querySelectorAll('li');
                collection[0].appendChild(sort[0]);
};

moveSandayToEndList();



function addNewItemToList () {
  
        let li, sort;
        let collection = document.querySelectorAll('ul');
        sort = document.querySelector('.list1');
        li = document.createElement('li');
        let inputValue = document.getElementById('textName').value;
        li.textContent = inputValue;
        sort.append(li);
        document.getElementById('textName').value = '';

        if (collection[0].lastChild.innerHTML === ""){
                li.textContent = `Вы добавили пустую строку`;
                sort.append(li);
        } else {
                li.textContent = inputValue;
                sort.append(li);
        }

      }