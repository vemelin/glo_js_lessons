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

    start();

let appData = {
    income:                 {},
    addIncom:               [],
    expenses:               {},
    addExpenses:            [],
    deposit:                false,
    mission:                20000,
    period:                 30,
    budgetDay:              0,
    budgetMonth:            0,
    expensesMonth:          0,

    budget:                 +money,
                            
    asking:                 function () {
                                let addExpenses = prompt('Перечислите возможные расходы через запятую', 'Apartments, Vehicle, Insurance, Internet, Mobile');
                                    appData.addExpenses = addExpenses.toLowerCase().split(',');
                                    appData.deposit = confirm('Есть ли у вас депозит в банке?');
                
                            },

    getExpensesMonth:       function(){
                                let amount = 0;

                                for (let i = 1; i < 3; i++) {
                                    let sum, getKey, getText;
                            
                                    //temporary variable for test
                                    getText = 'Expense '+ [i];
                                    
                                    getKey = prompt('Введите обязательную статью расходов', getText);
                            
                                    do {
                                        sum = prompt('Во сколько это обойдется?', 500);
                                    } while (!isNumber(sum));

                                    amount += +sum;

                                    //Creating new keys and values for nested expenses object
                                    appData.expenses[getKey] = +sum;

                                }

                                return amount;
                            },

    getAccumulatedMonth:    function(){
                                return appData.budget - expensesAmount;
                            },

    getTargetMonth:         function(){
                                let goal = Math.ceil(appData.mission / accumulatedMonth);

                                if (goal > 0){
                                    return ('Цель будет достигнута через > ' + goal + ' < месяца');
                                } 
                                else if (goal < 0) {
                                    return ('Цель не будет достигнута');
                                }
                            },

    getStatusIncome:        function(){

                                if (appData.budgetDay > 1200) {
                                    return ('У вас высокий уровень дохода.');
                                } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
                                    return ('У вас средний уровень дохода.');
                                } else if (appData.budgetDay < 600) {
                                    return ('К сожалению у вас уровень дохода ниже среднего, крепитесь.');
                                } else if (appData.budgetDay < 0) { 
                                    return ('Что то пошло не так.');
                                }

                            }
};

appData.asking();

console.log(appData);

let expensesAmount = appData.getExpensesMonth();
let accumulatedMonth = appData.getAccumulatedMonth();

//Total expenses per month (Total income - expenses)
console.log('Ваши расходы за месяц: ' + Math.ceil(expensesAmount));

//Return messages in what time we would achieve our goal
console.log(appData.getTargetMonth());

//The message of the rank of your income (totaly 3 status) 
console.log(appData.getStatusIncome());