'use strict';

const money = +prompt('Ваш месячный доход ?'),
    income = 1000,
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 400000;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    period = 7;

const expenses1 = prompt('Введите обязательную статью расходов?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    amount2 = +prompt('Во сколько это обойдется?');

console.log(typeof expenses1);
console.log(typeof expenses2);
console.log(typeof deposit);

console.log(addExpenses.length);

addExpenses = addExpenses.toLowerCase().split(',');

console.log('Период равен ' + period + ' месяцев.');

console.log('Цель заработать ' + mission + ' ₽/$/€.');

console.log(addExpenses);

const budgetMonth = money - (amount1 + amount2);

    period = Math.ceil(mission / budgetMonth);

const budgetDay = Math.floor(budgetMonth / 30);

console.log('бюджет на месяц составляет: ' + budgetMonth + ' ₽/$/€.');

console.log('Цель будет достигнута за: ' + period + ' месяцев.')

console.log('Бюджет на день ' + budgetDay + ' ₽/$/€!');

if (budgetDay >= 1200) {

        console.log('У вас высокий уровень дохода');

    } else if (budgetDay > 600 && budgetDay < 1200 ) {

        console.log('У вас средний уровень дохода');

    } else if (budgetDay > 0 && budgetDay <= 600) {

        console.log('К сожалению у вас уровень дохода ниже среднего');

    } else if (budgetDay <= 0) {

        console.log('Вам нужно учить JavaScript, чтоб больше зарабатывать, а то вы слишком бедны!');

    } else {

        console.log('Что то пошло не так');

    }
