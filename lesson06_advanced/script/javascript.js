'use sctrict';

const isNum = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getCounter = function () {
    let counter = 0;
    return function () {
        return ++counter;
    };
};

const gameRandom = function (attemps) {
    
    const randomNum = Math.floor(Math.random() * 100);
    console.log('Спрятанное число: ' + randomNum);

    const counter = getCounter();
    
    return (function checkNumber () {
        
        let count = counter(), userNumber;

        do {

            userNumber = prompt('Попробуй угадать число? Вводите только цифры', count); 

            if (userNumber === null) {
                alert ('Пока друг');
                break;
            }
            
        } while (!isNum(userNumber));

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
                
                (repeat) ? gameRandom(attemps) : alert ('Пока друг');     

            } else {

                let text3 = 'Ваши ' + count + ' попыток закончились, хотите сыграть еще?';
                repeat = confirm(text3);

            }            

        } else if (userNumber !== null) {

            alert ('Введите число!');
            checkNumber();

        }

    }());
    
};
//Function to start game;
gameRandom(10);