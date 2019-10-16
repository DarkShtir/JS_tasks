let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings:false
};
    
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

// Доп расходы в виде двух других циклов
// let i=0;
// while (i<2) {
//     let answerOne = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     answerTwo = prompt("Во сколько обойдется?", "");

//     i++;

//     if ((typeof(answerOne)) === 'string' && (typeof(answerOne)) != null && (typeof(answerTwo)) != null
//         && answerOne != '' && answerTwo != '' && answerOne.length < 50) {
//             console.log('done');
//         appData.expenses[answerOne] = answerTwo;
//     }  else {
//         i--;
//     }
// }

// do {
//     let answerOne = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     answerTwo = prompt("Во сколько обойдется?", "");

//     i++;

//     if ((typeof(answerOne)) === 'string' && (typeof(answerOne)) != null && (typeof(answerTwo)) != null
//         && answerOne != '' && answerTwo != '' && answerOne.length < 50) {
//             console.log('done');
//         appData.expenses[answerOne] = answerTwo;
//     }  else {
//         i--;
//     }
// } while (i < 2);

appData.moneyPerDay = appData.budget/30;

alert(`Ежедневный бюджет: ${appData.moneyPerDay}.`);

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка!');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка!');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка!');
} else {
    console.log('Произошла ошибка!');
}

console.log(appData);