'use sctrict';

// const   collections = document.querySelectorAll('.collection'),
//         elems = document.querySelectorAll('.elem');

// console.log(collections);
// console.log(elems);

// elems[3].remove();
// elems[1].remove();

// collections[1].append(elems[3]);
// collections[1].append(elems[1]);

// collections[1].prepend(elems[5]);

// collections[0].before(collections[1])

///////////////


// document.getElementById('timer').innerHTML = dateTime();


// class Options {
// 	constructor(height, width, bg, fontSize, textAlign) {
// 		this.height = height;
// 		this.width = width;
// 		this.bg = bg;
// 		this.fontSize = fontSize;
// 		this.textAlign = textAlign;
// 	}
// 	createBlock() {
// 		let block = document.createElement('div');
// 		block.textContent = ' Какой-то текст ';
// 		block.style.cssText = ` height:${this.height}px;
// 								width:${this.width}px;
// 								background-color:${this.bg};
// 								font-size:${this.fontSize}px;
// 								text-align:${this.textAlign};`;
// 		document.body.appendChild(block);
// 	}
// }

///////////////

// const arry = [1, 2, 3, 4, 5, 6];
// const above30 = arr.reduceRight((total, amount) => {
// //   if (amount > 30) {
// //     total.push(amount);
// //   }
//   return total.push(amount);
// }, []);

// console.log(above30);

// function arrayFill(value, length) { 
// 	var arr = [];
// 	for (var i = 0; i < length; i++) {
// 		arr.push(value);
// 	}
// 	return arr;
// }

// console.log(arrayFill('x', 5));

///////////////


// function arrayFill(value, length) { 
// 	var arr = [];
// 	for (var i = 0; i < length; i++) {
// 		arr.push(value);
// 	}
// 	return arr;
// }

// console.log(arrayFill('x', 5));

////////////////


let weekDaysArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let myDate = new Date();
let currentDay = new Date().getDay() - 1;

// <ul class="collection">
/* <li class="elem elem00">Введение</li> */

const   newCollection = document.createElement('ul'),
        newElem = document.createElement('li'),
        fontTypeItalic = document.createElement('i'),
        fontTypeBold = document.createElement('b');

        newElem.classList.add()
        newElem.textContent  = 'Пока что пусто';
        
        console.log(newCollection.append());
        console.log(newCollection[0].append(newEleme));


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