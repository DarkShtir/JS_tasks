'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexspenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings:true,
    chooseExpenses: function() {
        for (let i=0; i < 2; i++) {
            let answerOne = prompt("Введите обязательную статью расходов в этом месяце", ""),
                answerTwo = prompt("Во сколько обойдется?", "");
            
            if ((typeof(answerOne)) === 'string' && (typeof(answerOne)) != null && (typeof(answerTwo)) != null
                && answerOne != '' && answerTwo != '' && answerOne.length < 50) {
                    console.log('done');
                appData.expenses[answerOne] = answerTwo;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = +((appData.budget/30).toFixed(2));
        alert(`Ежедневный бюджет: ${appData.moneyPerDay}.`);
        return +appData.moneyPerDay;
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка!');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка!');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка!');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
                appData.monthIncome = +((save/100/12*percent).toFixed(2));
                alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
        }
    },
    chooseOptExpenses: function() {
        for (let i=0; i<3 ; i++) {
            let answer = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i+1] = answer;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            alert("Введите текст!");
        } else {
            appData.income = items.split(',');
            appData.income.push(prompt("Может что-то ещё?"));
            appData.income.sort();
        }
        appData.income.forEach(function(item, i) {
            alert(`Способы доп. заработка: ${i+1} - ${item}`);
        });
    }

};
appData.chooseIncome();

for(let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key}-${appData[key]}`);
}