'use sctrict';

let isNumber = function(number){
    return !isNaN(parseFloat(number)) && isFinite(number);
};

let money,
    income = 'Freelance',
    addExpenses = prompt('Перечислите возможные расходы через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 20000,
    expenses = [];

let start = function(){
    //money = prompt('Ваш месячный доход?');

    // while (!isNumber(money)){
    //     money = prompt('Ваш месячный доход?');
    // }

    // while(isNaN(parseFloat(money))){
    //     money = prompt('Ваш месячный доход?');
    // }

    // while (isNaN(money) || money.trim() === '' || moeny === null) {
    //     money = +prompt('Ваш месячный доход?');
    // }

    do {
        money = +prompt('Ваш месячный доход?');
    } while(!isNumber(money));

};

start();

let showTypeOff = function(data){
    return data + ' >> ' + typeof(data);
};

let getExpensesMonth = function(){
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов');
        sum += +prompt('Во сколько это обойдется?');

        // if (isNumber(sum)){
        //     sum += +prompt('Во сколько это обойдется?');
        // } else {
        //     break;
        // }

        // do {
        //     sum += +prompt('Во сколько это обойдется?');
        // } while (!isNumber(sum));
        

    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount + ' ' + typeof(expensesAmount));

let getAccumulatedMonth = function(){
    return result = money - expensesAmount;
};

console.log(getAccumulatedMonth());
console.log(typeof(money));

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
    
    let goal = Math.ceil(mission / accumulatedMonth);

    if (goal > 0){
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

// preview type of variables: money, income, deposit
console.log(showTypeOff(money));
console.log(showTypeOff(income));
console.log(showTypeOff(deposit));

// preview total expenses per month
console.log('Ваши расходы за месяц: ' + Math.ceil(expensesAmount));

// getting massive from expenses and transform it to lowercases
console.log(addExpenses.toLowerCase().split(', '));

//rounding float values to a larger number 
console.log(Math.ceil(getTargetMonth()));

//rounding float days to a larger number of days 
console.log(Math.ceil(budgetDay));

//just traking the status of our incomes (totaly 3 status) 
console.log(getStatusIncome());