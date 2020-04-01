'use sctrict';

let isNumber = function(number){
    return !isNaN(parseFloat(number)) && isFinite(number);
};

let money = 1000,
    income = 'Freelance',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Car, Internet, Insurance, Apartments, Mobile'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 20000,
    expenses = [];

let start = function(){

    money = prompt('Ваш месячный доход?');
 
    while(!isNumber(money)){
        money = prompt('Ваш месячный доход?');
    }

};

start();

let showTypeOff = function(data){
    return data + ' >> ' + typeof(data);
};

let getExpensesMonth = function(){
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Опишите расходы черзе запятую?');        

        if (isNumber(sum)){
            sum += +prompt('Сумма расходов?');
        } else {
            break;
        }
    }
    console.log(expenses);
    return sum;    
};

let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function(){
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
    
    let goal = mission / accumulatedMonth;

    if (goal >= 0){
        console.log('Цель будет достигнута через > ' + goal + ' < месяца');
        return goal; 
    } 
    else if (goal < 0) {
        console.log('Цель не будет достигнута');
    }
};

let budgetDay =  accumulatedMonth / 30;

let getStatusIncome = function(){
    if (budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay <= 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) { 
        return ('Что то пошло не так');
    }
};

console.log(showTypeOff(money));
console.log(showTypeOff(income));
console.log(showTypeOff(deposit));
console.log('Ваши расходы за месяц: ' + expensesAmount);
console.log(addExpenses.toLowerCase().split(', '));
console.log(Math.ceil(getTargetMonth()));
console.log(Math.ceil(budgetDay));
console.log(getStatusIncome());