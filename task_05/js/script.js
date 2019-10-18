let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    adv = document.querySelector('.column .adv'),
    title = document.querySelector('#title'),
    question = document.querySelector('#prompt'),
    column = document.querySelectorAll('.column')[1];

let newMenuItem = document.createElement('li');
newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый пункт';
menu.appendChild(newMenuItem);

menu.insertBefore(menuItem[2], menuItem[1]);

column.removeChild(adv);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
title.textContent = 'Мы продаем только подлинную технику Apple';
question.textContent = prompt("Ваше отношение к технике Apple???", "");