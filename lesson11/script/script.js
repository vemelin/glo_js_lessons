'use sctrict';

// Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице

// 1) Выведите на страницу текущую дату и время в 2-х форматах: 

//     a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  (1 БАЛЛ)

//     б) '04.02.2020 - 21:05:33' (1 БАЛЛ)

// 2) Для вывода в формате (а) напишите функцию, которая будет менять менять склонение слов в 
//    зависимости от числа, "час, часов, часа"

// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями 
//    которые состоят из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)

// 4) С помощью функции setInterval, реализуйте вывод даты и времени каждую секунду (1 БАЛЛ)



// 5) Добавить папку с уроком на свой GitHub
        //Кнопку "Рассчитать" через id
let     startBtn = document.getElementById('start'),

        //Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
        addIncomePlusBtn = document.getElementsByTagName('button')[0],
        addExpensePlusBtn = document.getElementsByTagName('button')[1],

        //Чекбокс по id через querySelector
        checkDeposit = document.querySelector('#deposit-check'),

        //Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
        inputsAdditionalIncome = document.querySelectorAll('.additional_income-item'),

        //Каждый элемент в правой части программы через класс, которые имеют в имени класса "-value"
        outputExpensesResults = document.getElementsByClassName('result-total');


        // Оставшиеся поля через querySelector каждый в отдельную переменную:
        // Месячный доход *
let     salaryAmountInput = document.querySelector('.salary-amount'),

        // Дополнительный доход
        incomeNameInput = document.querySelector('.income-title'),
        incomeAmountInput = document.querySelector('.income-amount'),

        // Возможный доход
        additionalIncomeNameInput1 = document.querySelector('.additional_income-item'),
        additionalIncomeNameInput2 = document.querySelector('.additional_income-item'),

        // Возможный доход
        requiredExepnsesNameInput = document.querySelector('.expenses-title'),
        requiredExepnsesAmountInput = document.querySelector('.expenses-amount'),

        // Возможные расходы (перечислите через запятую)
        additionalExpensesListInput = document.querySelector('.additional_expenses-item'),

        // Цель
        targetAmountInput = document.querySelector('.target-amount'),

        // Период расчета
        periodInput = document.querySelector('.period-select');