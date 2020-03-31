'use sctrict';
let money = 1000;
let income = 'Freelance';
let deposit = true;
let mission = 20000;

//New criteria from lesson 3
money = +prompt('Ваш месячный доход?', 5000);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Car, Internet, Insurance, Apartments, Mobile');
deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?', 'Expenses 1');
let amount1 = +prompt('1 Количество: Во сколько это обойдется?', 1500);

let expenses2 = prompt('Введите обязательную статью расходов?', 'Expenses 2');
let amount2 = +prompt('1 Количество: Во сколько это обойдется?', 375);


//New criteria by lesson 4
let showTypeOff = function(data){
    console.log(data, typeof(data));
};

showTypeOff(money);
showTypeOff(income);
showTypeOff(deposit);

let getExpensesMonth = function(){
    return amount1 + amount2
};

let getAccumulatedMonth = function(){
    return money - (amount1 + amount2);
};

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Car, Internet, Insurance, Apartments, Mobile');

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(accumulatedMonth){
    let budgetDay = Math.ceil(accumulatedMonth/30);
    let sum = mission / budgetDay;
     return Math.floor(sum);
}

let budgetDay = getAccumulatedMonth();

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

console.log(getStatusIncome());