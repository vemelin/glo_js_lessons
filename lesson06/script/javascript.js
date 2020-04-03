'use sctrict';

const isNum = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandomNum = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + min + 1)) + min;
};

const getCounter = function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
};

const gameRandom = function (attemps) {
    
    const randomNum = getRandomNum(1, 100);
    const counter = getCounter();
    console.log('Спрятанное число: ' + randomNum);
    
    return function checkNumber () {
        const count = counter();
        const userNumber = prompt('Попробуй угадать число?', count);

        if (isNum(userNumber)) {
            
            let repeat = false;

            if (count < attemps) {

                const num = +userNumber;

                if (num > randomNum) {
                    alert ('Загаданное число меньше, осталось попыток ...');
                    return checkNumber();
                    
                } else if (num < randomNum) {
                    alert ('Загаданное число больше, осталось попыток ...');
                    return checkNumber();
                }

                const repeat = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

            } else {
                const repeat = confirm('Попытки закончились, хотите сыграть еще?');
            }
            
            if (repeat) gameRandom(attemps);

        } else {

            if (userNumber !== null) {
                alert ('Введите число!');
                checkNumber();
            }
        }

        alert ('Пока друг');
    }

};

let game = gameRandom(10);
//Function to start game;
game();