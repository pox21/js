'use strict';

let money = prompt('Ваш месячный доход ?'),
    income = 1000,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 400000,
    period = 7;

let expenses1 = prompt('Введите обязательную статью расходов?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount1 = prompt('Во сколько это обойдется?'),
    amount2 = prompt('Во сколько это обойдется?');

console.log(typeof expenses1);
console.log(typeof amount1);
console.log(typeof deposit);

console.log(addExpenses.length);

addExpenses = addExpenses.toLowerCase().split(',');

console.log('Период равен ' + period + ' месяцев.');

console.log('Цель заработать ' + mission + ' ₽/$/€.');

console.log(addExpenses);

let budgetMonth = parseFloat(money) - parseFloat(amount1) - parseFloat(amount2);

    period = Math.ceil(mission / budgetMonth);

let budgetDay = Math.floor(budgetMonth / 30);

console.log('бюджет на месяц составляет: ' + budgetMonth + ' ₽/$/€.');

console.log('Цель будет достигнута за: ' + period + ' месяцев.')

console.log('Бюджет на день ' + budgetDay + ' ₽/$/€!');

if (budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay >= 601 && budgetDay < 1199 ) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay <= 600) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else {
        console.log('Что то пошло не так');
    }
