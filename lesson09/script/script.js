'use sctrict';

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
        
        let expensesResults = function () {

            for (let i = 1; i < outputExpensesResults.length; i++) {
                let result;
                result = document.getElementsByClassName('result-total')[i];
                console.log(result);
            }
        };
        expensesResults();


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