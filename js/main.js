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

addExpenses = addExpenses.toLowerCase().split(',');

function showTypeOf(deposit, expenses1, amount1) {
    const result = [];
    result.push(typeof(deposit));
    result.push(typeof(expenses1));
    result.push(typeof(amount1));
    return result;
   /* return {
        deposit: typeof deposit,
        expenses1: typeof expenses1,
        amount1: typeof amount1
    }*/
}
console.log(showTypeOf(deposit, expenses1, amount1));

function getExpensesMonth(amount1, amount2) {
    return amount1 + amount2;
};

function getAccumulatedMonth() {
    return money - getExpensesMonth(amount1, amount2);
};

const accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth);
};

const budgetDay = Math.floor(accumulatedMonth / 30);

console.log(getExpensesMonth(amount1, amount2));

console.log(addExpenses);

console.log('Бюджет на месяц составляет: ' + getAccumulatedMonth() + ' ₽/$/€. Цель заработать ' + mission + ' ₽/$/€. Цель будет достигнута за: ' + getTargetMonth() + ' месяцев.');

console.log('Бюджет на день ' + budgetDay + ' ₽/$/€!');

function getStatusIncome(budgetDay) {
    if (budgetDay >= 1200) {

            return ('У вас высокий уровень дохода');

        } else if (budgetDay > 600 && budgetDay < 1200 ) {

            return ('У вас средний уровень дохода');

        } else if (budgetDay > 0 && budgetDay <= 600) {

            return ('К сожалению у вас уровень дохода ниже среднего');

        } else if (budgetDay <= 0) {

            return ('Вам нужно учить JavaScript, чтоб больше зарабатывать, а то вы слишком бедны!');

        } else {

            return ('Что то пошло не так');

        }
    }
console.log(getStatusIncome(budgetDay));
