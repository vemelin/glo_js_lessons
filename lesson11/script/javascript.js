'use sctrict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    acumulateMonthValue = document.getElementsByClassName('acumulate_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select');

    // Number validation
    isNumber = function(number){
        return !isNaN(parseFloat(number)) && isFinite(number);
    };

let appData = { 
    income:                     {},
    addIncom:                   [],
    expenses:                   {},
    addExpenses:                [],
    deposit:                    false,
    mission:                    20000,
    period:                     30,
    expensesMonth:              0,
    budget:                     0,
    budgetDay:                  0,
    budgetMonth:                0,
    percentDeposit:             0,
    moneyDeposit:               0,

    start:                      function () {

                                    do {
                                        money = prompt('Ваш месячный доход?', 5000);
                                    } while(!isNumber(money) || money.trim() === '' || money === null);

                                    appData.budget = salaryAmount.value;
                                    console.log(this.budget);

                                    // Список обязательных методово для вызова
                                    // appData.asking();
                                    // appData.getExpensesMonth();
                                    // appData.getBudget();
                                    // appData.getTargetMonth();
                                    // appData.getStatusIncome();
                                    // appData.getInfoDeposit();
                                    
                                },

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

// Start programm
start.addEventListener('click', appData.start);

//Total expenses per month (Total income - expenses)
console.log('Расходы за месяц: ' + appData.expensesMonth);

//Return messages in what time we would achieve our goal
console.log(appData.getTargetMonth());

//The message of the rank of your income (totaly 3 status) 
console.log(appData.getStatusIncome());

//Display array of expenses (1st letter for each word should start from Uppercase)
//The method is consist from cicle For of array + join new array with changed
appData.getDataFromArray(appData.addExpenses);