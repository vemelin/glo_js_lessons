// 'use sctrict';

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
    console.log('Спрятанное число: ' + randomNum);

    const counter = getCounter();
    
    return (function checkNumber () {
        const count = counter();
        const userNumber = prompt('Попробуй угадать число?', count);
        console.log(count);
        
        let inversResult = 10 - count;

        if (isNum(userNumber)) {
            
            let repeat = false;

            if (count < attemps) {

                const num = +userNumber;

                if (num > randomNum) {
                    let text1 = 'Загаданное число меньше, осталось ' + inversResult + ' попыток';
                    alert (text1);
                    return checkNumber();
                    
                } else if (num < randomNum) {
                    let text2 = 'Загаданное число больше, осталось ' + inversResult + ' попыток';
                    alert (text2);
                    return checkNumber();
                }

                repeat = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

            } else {
                let text3 = 'Ваши ' + count + ' попыток закончились, хотите сыграть еще?';
                repeat = confirm(text3);
            }
            
            if (repeat) gameRandom(attemps);

        } else {

            if (userNumber !== null) {
                alert ('Введите число!');
                checkNumber();
            }
        }

        alert ('Пока друг');
    }());

};

//Function to start game;
gameRandom(10);