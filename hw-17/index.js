// Задание 1

let word1 = "true";
let word2 = false;
let word3 = 17;
let word4 = undefined;
let word5 = null;

console.log(typeof(word1));
console.log(typeof(word2));
console.log(typeof(word3));
console.log(typeof(word4));
console.log(typeof(word5));

// Задание 2

let height = 15;
let width = 20;

if (height > width){
    console.log(height)
}
else{
    console.log(width);
}

//Задание 3

startNumber = 1;

while(startNumber <= 20){
    if(startNumber % 3 == 0){
        console.log(startNumber)
        startNumber++;
    }
    else{
        startNumber++;
    }
}

//Задание 4

let key = true
let documents = true
let pen = true
let apple = false
let orange = true

if(key && documents && pen && (apple || orange)){
    shouldGoToWork = "Мы готовы!"
} else{
    shouldGoToWork = "Мы не готовы..."
}

console.log(shouldGoToWork)

// Задание 5

// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

resultOfInput = prompt("Введите число")

if (resultOfInput % 3 == 0 && resultOfInput % 5 == 0){
    console.log("FizBuz")
}
else if (resultOfInput % 3 == 0){
    console.log("Buz")
}
else if (resultOfInput % 5 == 0){
    console.log("Fiz")
}
else{
    console.log("Не подходит ни одно из условий")
}

// Задание 6

let ageHuman = prompt("Введи свой возраст")

if (ageHuman > 18 && ageHuman < 80){
    console.log("Попей пивка")
}
else if (ageHuman > 0 && ageHuman < 18){
    console.log("Пей колу")
    if (ageHuman >= 16 && ageHuman <= 18){
        console.log("Можешь выкурить сигаретку, только маме не говори")
    }
}
else if (ageHuman >= 16 && ageHuman <= 18){
    console.log("Можешь выкурить сигаретку, только маме не говори")
}
else{
    console.log("Ну ты уже загнул, иди отдохни лучше")
}

// Задание 7

let inputSide = prompt("В какую строну света хотел бы отправиться?")

switch (inputSide) {
    case "юг": console.log("на юг пойдешь счастье найдешь");
    break;
    case "север": console.log("на север пойдешь много денег найдешь");
    break;
    case "запад": console.log("на запад пойдешь верного друга найдешь");
    break;
    case "восток": console.log("на восток пойдешь разработчиком станешь");
    break;
    default:
        console.log("Выбери сторону (север, юг, запад, восток");
}