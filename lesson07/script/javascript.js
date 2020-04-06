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
    expensesMonth:          0,
    budget:                 +money,
    budgetDay:              0,
    budgetMonth:            0,
                            
    asking:                 function () {

                                let addExpenses = prompt('Перечислите возможные расходы через запятую', 'Apartments, Vehicle, Insurance, Internet, Mobile');
                                    appData.addExpenses = addExpenses.toLowerCase().split(',');
                                    appData.deposit = confirm('Есть ли у вас депозит в банке?');

                                    let amount = 0;

                                    for (let i = 1; i < 3; i++) {
                                        let sum, getKey, getText;
                                
                                        //temporary variable for test
                                        getText = 'Expense_'+ [i];
                                        
                                        getKey = prompt('Введите обязательную статью расходов', getText);
                                
                                        do {
                                            sum = prompt('Во сколько это обойдется?', 500);
                                        } while (!isNumber(sum));
    
                                        //amount += sum;
    
                                        //Creating new keys and values for nested expenses object
                                        appData.expenses[getKey] = +sum;
    
                                    }
                                    //return amount;

                            },

    getExpensesMonth:       function(){

                                for (let key in appData.expenses) {
                                    appData.expensesMonth += +appData.expenses[key];
                                }
                                return appData.expensesMonth;

                            },

    getBudget:              function(){
                                
                                appData.budgetMonth = appData.budget - appData.expensesMonth;
                                appData.budgetDay = Math.ceil(appData.budgetMonth / appData.period);
                                
                            },

    getTargetMonth:         function(){
                                let goal = Math.ceil(appData.mission / appData.budgetDay);

                                if (goal > 0){
                                    return ('Цель будет достигнута через {' + goal + '} месяца');
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
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

//Total expenses per month (Total income - expenses)
console.log('Расходы за месяц: ' + appData.expensesMonth);

//Return messages in what time we would achieve our goal
console.log(appData.getTargetMonth());

//The message of the rank of your income (totaly 3 status) 
console.log(appData.getStatusIncome());

console.log('');
console.log('⭕писание объекта appData:');

for (let key in appData) {
    console.log(key + ': ' + appData[key]);
}