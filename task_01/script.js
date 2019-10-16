let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings:false
};

let answerOne,
    answerTwo;
    
for (let i=0; i<2; i++) {
    answerOne = prompt("Введите обязательную статью расходов в этом месяце");
    answerTwo = prompt("Во сколько обойдется?");
    appData.expenses[answerOne] = answerTwo;
}

alert(appData.budget/30);
console.log(appData);