'use sctrict';

let generateNew = document.querySelector('#awesomeColor'),
    color = document.querySelector('#color'),
    header1 = document.querySelector('h1');
    header1.style = 'text-align: center;';


let setBackground = function () {

        let     randomColor = Math.floor(Math.random()*16777215).toString(16);
                document.body.style.backgroundColor = "#" + randomColor;
                color.textContent = "#" + randomColor;

    };

generateNew.addEventListener("click", setBackground);

setBackground();