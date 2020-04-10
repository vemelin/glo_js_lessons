'use sctrict';

let isNum = function(number){
        return !isNaN(parseFloat(number)) && isFinite(number);
    };

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
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelectorAll('.income-items'),
    periodAmountText = document.getElementsByClassName('period-amount');

let appData = { 
    budget:                     0,
    budgetDay:                  0,
    budgetMonth:                0,
    income:                     {},
    incomeMonth:                0,
    addIncome:                  [],
    expenses:                   {},
    expensesMonth:              0,
    addExpenses:                [],
    deposit:                    false,
    percentDeposit:             0,
    moneyDeposit:               0,

    start:                      function () {
                                    if (!isNum(salaryAmount.value) || salaryAmount.value.trim() === '' || salaryAmount.value === null) {
                                        
                                        return;
                                    }

                                    appData.budget = Math.ceil(+salaryAmount.value);

                                    // Список обязательных методово для вызова
                                    appData.getExpenses();
                                    appData.getIncome();
                                    appData.getExpensesMonth();
                                    appData.getAddExpenses();
                                    appData.getAddIncome();
                                    appData.getBudget();   

                                    appData.showResult();

                                    console.log('appData.budget: ' + appData.budget);
                                    console.log('appData.incomeMonth: ' + appData.incomeMonth);
                                    console.log('appData.expensesMonth: ' + appData.expensesMonth);
                                    
                                    // appData.getTargetMonth();
                                    // appData.getStatusIncome();
                                    // appData.getInfoDeposit();
                                    
                                },

    showResult:                 function () {

                                    budgetMonthValue.value = appData.budgetMonth;
                                    budgetDayValue.value = appData.budgetDay;
                                    expensesMonthValue.value = appData.expensesMonth;
                                    additionalExpensesValue.value = appData.addExpenses.join(', ');
                                    additionalIncomeValue.value = appData.addIncome.join(', ');
                                    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
                                    incomePeriodValue.value = appData.calculateSavedMoney();
 
                                },

    addExpensesBlock:           function () {

                                    let cloneExpensesItems = expensesItems[0].cloneNode(true);
                                        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
                                        expensesItems = document.querySelectorAll('.expenses-items');

                                        if(expensesItems.length === 3) {
                                            expensesPlus.style.display = 'none';
                                        }
        
                                },


    getExpenses:                function () {

                                    expensesItems.forEach(function (item) {
                                       
                                        let itemExpenses = item.querySelector('.expenses-title').value;
                                        let cashExpenses = item.querySelector('.expenses-amount').value;

                                        if (itemExpenses !== '' && cashExpenses !== '') {
                                            appData.expenses[itemExpenses] = cashExpenses;
                                        }
                                        
                                    });

                                },

    addIncomeBlock:           function () {

                                    let cloneIncomeItems = incomeItems[0].cloneNode(true);
                                        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
                                        incomeItems = document.querySelectorAll('.income-items');

                                        if(incomeItems.length === 3) {
                                            incomePlus.style.display = 'none';
                                        }
        
                                },

    getIncome:                   function () {

                                    incomeItems.forEach(function (item) {
                                                                
                                        let incomeTitle = item.querySelector('.income-title').value;
                                        let incomeAmount = item.querySelector('.income-amount').value;

                                        if (incomeTitle !== '' && incomeAmount !== '') {
                                            appData.expenses[incomeTitle] = incomeAmount;
                                        }

                                        // for (let key in appData.income) {

                                        //     appData.incomeMonth += +appData.income[key];
                                        // }
                                    
                                        
                                    });

                                },

    getAddExpenses:             function () {

                                    let addExpenses = additionalExpensesItem.value.split(',');
                                        addExpenses.forEach(function (item) { 

                                            item = item.trim();

                                            if (item !== '') {
                                                appData.addExpenses.push(item);
                                            }

                                        });

                                },

    getAddIncome:               function () {

                                    additionalIncomeItem.forEach(function(item) {

                                        let itemValue = item.value.trim();

                                            if (itemValue !== '') {

                                                appData.addIncome.push(itemValue);

                                            }

                                    });

                                },

    getExpensesMonth:           function () {

                                    for (let key in appData.expenses) {
                                        appData.expensesMonth += +appData.expenses[key];
                                    }
                                    return appData.expensesMonth;

                                },

    getBudget:                  function () {

                                    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
                                    appData.budgetDay = Math.ceil(appData.budgetMonth / 30);

                                },

    getTargetMonth:             function () {

                                    return targetAmount.value / appData.budgetMonth;
                                    
                                },

    updateSliderRange:          function () {

                                    let sliderNumber = document.querySelector('.period-select').value;
                                    let updateSliderText = document.querySelector('.period-amount');
                                        updateSliderText.innerHTML = sliderNumber;
    },

    getInfoDeposit:             function () {

                                    appData.deposit = confirm('Есть ли у вас депозит в банке?');
                                    
                                    // if (appData.deposit){
                                        
                                    //     do {
                                    //         appData.percentDeposit = prompt('Какой % годового депозита', '10');
                                    //     } while (!isNumber(appData.percentDeposit) || appData.percentDeposit === '' ||appData.percentDeposit === null);
                                    
                                    //     //Add New value % for percentDeposit property
                                    //     appData.percentDeposit = +appData.percentDeposit;
                                        
                                    //     do {
                                    //         appData.moneyDeposit = prompt('Какая сумма заложена?', 5000);
                                    //     } while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
                                    
                                    //     //Add New value for moneyDeposit property
                                    //     appData.moneyDeposit = +appData.moneyDeposit;
                                    // }
                                },

    calculateSavedMoney:        function () {
                                    return appData.budgetMonth * periodSelect.value;
    }
};

// Start programm
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('click', appData.updateSliderRange);

console.log(periodAmountText);
// console.log(appData.getTargetMonth());
// console.log(targetMonthValue);