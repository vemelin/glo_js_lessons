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













// 'use sctrict';

// const isNum = function (n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// };

// const getRandomNum = function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max + min + 1)) + min;
// };

// const getCounter = function () {
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
// };

// const gameRandom = function (attemps) {
    
//     const randomNum = getRandomNum(1, 100);
//     console.log('Спрятанное число: ' + randomNum);

//     const counter = getCounter();
    
//     return (function checkNumber () {
//         const count = counter();
//         const userNumber = prompt('Попробуй угадать число?', count);
//         console.log(count);
        
//         let inversResult = 10 - count;

//         if (isNum(userNumber)) {
            
//             let repeat = false;

//             if (count < attemps) {

//                 const num = +userNumber;

//                 if (num > randomNum) {
//                     let text1 = 'Загаданное число меньше, осталось ' + inversResult + ' попыток';
//                     alert (text1);
//                     return checkNumber();
                    
//                 } else if (num < randomNum) {
//                     let text2 = 'Загаданное число больше, осталось ' + inversResult + ' попыток';
//                     alert (text2);
//                     return checkNumber();
//                 }

//                 repeat = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

//             } else {
//                 let text3 = 'Ваши ' + count + ' попыток закончились, хотите сыграть еще?';
//                 repeat = confirm(text3);
//             }
            
//             if (repeat) gameRandom(attemps);

//         } else if (userNumber !== null) {

//             if (userNumber == 'string') {
//                 alert ('Введите число!'); 
//                 checkNumber();
//             } else if (userNumber !== null) {
//                 checkNumber();
//             }
                
//         } else {

//             alert ('Пока друг');

//         }

//     }());

// };

// //Function to start game;
// gameRandom(10);


// // function random(number) {
// //     return Math.ceil(Math.random() * number);
// //  } 
 
// // let name = prompt('Привет! Как тебя зовут?');
 
// // while (name == '' || name == null) {
// //     name = prompt('Привет! Как тебя зовут?');
    
// // }
 
// // alert(name + ', давай с тобой сыграем в игру. Я загадал число от 1 до 1000. Попробуй отгадать его. После каждой попытки я скажу "мало", "много" или "верно". Когда тебе надоест играть, нажми кнопку Esc на клавиатуре. Поехали!');
 
// // let number = random(1000);
 
// // let answer = prompt('Какое число я загадал?');
    
// // let counter = 1;
 
// // if  (answer == null ) {
 
// // alert('Пока! Как нибудь сыграем ещё. ^_^');
 
// //     answer == + answer;
 
// // } else {
 
// //     while (answer != number && answer != null) {
                      
// //         (answer < number) ? answer = prompt('Мало. Попробуй ещё раз!') :
             
// //         (answer > number) ? answer = prompt('Много. Попробуй ещё раз!') :
                                    
// //         (answer != parseInt(answer) ) ? answer = prompt('Вводить нужно числа.  Какое число я загадал?') : false;
                               
// //         counter = counter + 1;
        
// //     }   if (answer == number) {
 
// //         alert('Верно! Это число ' + number + '.' + ' Тебе понадобилось ' + counter + ' попыток.');
 
// //         } else if (answer == null) {
 
// //             }  alert('Пока! Как нибудь сыграем ещё. ^_^');
 
// // }