'use sctrict';

let money = 1000;
console.log(money + '$');

let income = 'Freelance';
console.log(income);

let addExpenses = 'Car, Internet, Insurance, Apartments, Mobile';
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let deposit = true;
console.log(deposit);

let mission = 20000;
console.log('Цель заработать ' + mission + ' долларов');

let period = 24;
console.log('Период равен ' + period + ' месяцев');

//New criteria from lesson 3
money = +prompt('Ваш месячный доход?', 5000);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');
deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?', 'Expenses 1');
let amount1 = +prompt('1 Количество: Во сколько это обойдется?', 1500);

let expenses2 = prompt('Введите обязательную статью расходов?', 'Expenses 2');
let amount2 = +prompt('1 Количество: Во сколько это обойдется?', 375);

let budgetMonth = money - (amount1 + amount2);
console.log(budgetMonth);

let budgetDay = budgetMonth/30;
console.log(budgetDay);

budgetDay = Math.ceil(mission/budgetMonth);
console.log(budgetDay);

if (budgetDay > 1200) console.log('У вас высокий уровень дохода');
if (budgetDay >= 600 && budgetDay <= 1200) console.log('У вас средний уровень дохода');
if (budgetDay < 600) console.log('К сожалению у вас уровень дохода ниже среднего');
if (budgetDay < 0) console.log('Что то пошло не так'); 