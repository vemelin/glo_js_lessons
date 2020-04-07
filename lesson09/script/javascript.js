'use sctrict';
let money,

    isNumber = function(number){
        return !isNaN(parseFloat(number)) && isFinite(number);
    },

    start = function(){
        do {
            money = prompt('Ваш месячный доход?', 5000);
        } while(!isNumber(money) || money.trim() === '' || money === null);
    };

    //start();

let appData = { 
    income:                     {},
    addIncom:                   [],
    expenses:                   {},
    addExpenses:                [],
    deposit:                    false,
    mission:                    20000,
    period:                     30,
    expensesMonth:              0,
    budget:                     +money,
    budgetDay:                  0,
    budgetMonth:                0,
    percentDeposit:             0,
    moneyDeposit:               0,

    asking:                     function () {

                                    let itemIncome, cashIncom, addExpenses;

                                    if (confirm('Если у вас дополнительный источник заработка?')) {

                                            do {
                                                itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'UX/UI Design')
                                            } while (isNumber(itemIncome) || itemIncome === '' || itemIncome === 'string' || itemIncome === null);

                                            do {
                                                cashIncom = prompt('Сколько в месяц вы на этом зарабатываете?', 1000);
                                            } while (!isNumber(cashIncom) || cashIncom === '' || cashIncom === null);
                                            
                                            cashIncom = cashIncom.trim(', ');

                                            appData.income[itemIncome] = +cashIncom;

                                    }

                                    do {
                                        addExpenses = prompt('Перечислите возможные расходы через запятую', 'Apartments, Vehicle, Insurance, Internet, Mobile');
                                    } while (isNumber(addExpenses) || addExpenses === '' || addExpenses === null);

                                    if (addExpenses) {
                                        appData.addExpenses = addExpenses.toLowerCase().split(', ');
                                    }

                                    appData.deposit = confirm('Есть ли у вас депозит в банке?');

                                    let amount = 0;

                                    for (let i = 1; i < 3; i++) {
                                        let sum, getKey, getText;
                                    
                                        //temporary variable for test
                                        getText = 'Expense_'+ [i];

                                        do {
                                            getKey = prompt('Введите обязательную статью расходов', getText);
                                        } while (isNumber(getKey) || getKey === '' || getKey === null);
                                    
                                        do {
                                            sum = prompt('Во сколько это обойдется?', 500);
                                        } while (!isNumber(sum) || sum === '' || sum === null);
                                    
                                        //Creating new nested elements of expenses object
                                        appData.expenses[getKey] = +sum;
                                    
                                    }

                                },

    getExpensesMonth:           function(){

                                    for (let key in appData.expenses) {
                                        appData.expensesMonth += +appData.expenses[key];
                                    }
                                    return appData.expensesMonth;

                                },

    getBudget:                  function(){

                                    appData.budgetMonth = appData.budget - appData.expensesMonth;
                                    appData.budgetDay = Math.ceil(appData.budgetMonth / appData.period);

                                },

    getTargetMonth:             function(){
                                    let goal = Math.ceil(appData.mission / appData.budgetDay);

                                    if (goal > 0){
                                        return ('Цель будет достигнута через {' + goal + '} месяца');
                                    } 
                                    else if (goal < 0) {
                                        return ('Цель не будет достигнута');
                                    }
                                },

    getStatusIncome:            function(){

                                    if (appData.budgetDay > 1200) {
                                        return ('У вас высокий уровень дохода.');
                                    } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
                                        return ('У вас средний уровень дохода.');
                                    } else if (appData.budgetDay < 600) {
                                        return ('К сожалению у вас уровень дохода ниже среднего, крепитесь.');
                                    } else if (appData.budgetDay < 0) { 
                                        return ('Что то пошло не так.');
                                    }

                                },

    getInfoDeposit:             function () {
                                    if (appData.deposit){
                                        
                                        do {
                                            appData.percentDeposit = prompt('Какой % годового депозита', '10');
                                        } while (!isNumber(appData.percentDeposit) || appData.percentDeposit === '' ||appData.percentDeposit === null);
                                    
                                        //Add New value % for percentDeposit property
                                        appData.percentDeposit = +appData.percentDeposit;
                                        
                                        do {
                                            appData.moneyDeposit = prompt('Какая сумма заложена?', 5000);
                                        } while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
                                    
                                        //Add New value for moneyDeposit property
                                        appData.moneyDeposit = +appData.moneyDeposit;
                                    }
                                },

    calculateSavedMoney:        function () {
                                    return appData.budgetMonth * appData.period;
    },

    getDataFromArray:           function (data) {

                                    let array = [];

                                    for (let i = 0; i < data.length; i++) {
                                        array[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
                                    }   

                                    console.log('');
                                    console.log('Вывести строкой список расходов, каждое слово с большой буквы, слова разделены запятой и пробелом');
                                    console.log('Результат: ' + array.join(', '));

                                },
};

// Список обязательных методово для вызова
// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.getTargetMonth();
// appData.getStatusIncome();
// appData.getInfoDeposit();

//Total expenses per month (Total income - expenses)
console.log('Расходы за месяц: ' + appData.expensesMonth);

//Return messages in what time we would achieve our goal
console.log(appData.getTargetMonth());

//The message of the rank of your income (totaly 3 status) 
console.log(appData.getStatusIncome());

//Display array of expenses (1st letter for each word should start from Uppercase)
//The method is consist from cicle For of array + join new array with changed
appData.getDataFromArray(appData.addExpenses);

console.log('');
console.log('⭕писание объекта appData:');

for (let key in appData) {
    console.log(key + ': ' + appData[key]);
    
}


        //Кнопку "Рассчитать" через id
let     startBtn = document.getElementById('start'),

        //Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
        addIncomePlusBtn = document.getElementsByTagName('button')[0],
        addExpensePlusBtn = document.getElementsByTagName('button')[1],

        //Чекбокс по id через querySelector
        checkDeposit = document.querySelector('#deposit-check'),

        //Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
        inputsAdditionalIncome = document.querySelectorAll('.additional_income-item'),

        //Дневной бюджет
        budgetDayOutput = document.getElementsByClassName('result-total')[1],   
        //Расход за месяц
        expensesMonthOutput = document.getElementsByClassName('result-total')[2],    
        //Возможные доходы
        additionalIncomeOutput = document.getElementsByClassName('result-total')[3],    
        //Возможные расходы
        additionalExpensesOutput = document.getElementsByClassName('result-total')[4],    
        //Накопления за период
        incomePeriodOutput = document.getElementsByClassName('result-total')[5],    
        //Срок достижения цели в месяцах
        targetMonthOutput = document.getElementsByClassName('result-total')[6];


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