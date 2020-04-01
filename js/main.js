'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const   income = 'Фриланс',
        deposit = confirm('Есть ли у вас депозит в банке?'),
        mission = 400000;
let     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
        period = 7;

let money;

let start = function(){
    do {
        money = prompt('Ваш месячный доход ?');
    }
    while (!isNumber(money));
};

start();

let showTypeOf = function (item) {
    console.log(typeof item);
};
showTypeOf(deposit);
showTypeOf(income);
showTypeOf(money);

let expenses = [];

addExpenses = addExpenses.toLowerCase().split(',');

function getExpensesMonth() {
    let sum = 0;

    for (let i=0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?');

        do {
            sum += +prompt('Во сколько это обойдется?');
        }
        while (!isNumber(sum));
    }
    console.log(expenses);
    return sum;
    
};

let expensesAmount = getExpensesMonth();

function getAccumulatedMonth() {
    return money - expensesAmount;
};

const accumulatedMonth = getAccumulatedMonth();

console.log('Бюджет на месяц составляет: ' + getAccumulatedMonth() + ' ₽/$/€. Цель заработать ' + mission + ' ₽/$/€.');

function getTargetMonth() {

    if (Math.ceil(mission / accumulatedMonth) <= 0) {  
        return ('Цель не будет достигнута.');
    } else {
        return ('Цель будет достигнута за: ' + Math.ceil(mission / accumulatedMonth) + ' месяцев.');      
    }

};
console.log(getTargetMonth());

const budgetDay = Math.floor(accumulatedMonth / 30);

console.log('Расходы за месяц ' + expensesAmount + ' ₽/$/€.');

console.log(addExpenses);

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
