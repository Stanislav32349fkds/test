'use strict';

// Изучаем типы переменных это первый урок
var leftBorderWidth = 1;
let second =2; 
const pi = 3.14; 
console.log(leftBorderWidth);
// Изучаем типы переменных второй урок
let person = {
    name: "Jordik",
    age: 25,
    Married: false
};
//console.log(person.name)
//console.log(person.age)
console.log(person)

console.log(person["name"]);
// MASSIVE
let arr = ['olivit.png','orang.jpg','applejuice.bmp'];
console.log(arr[0], arr[1], arr[2])
// В браузере появляется окошка с сообщением - это модальное окно
//alert("Hello Bratan Bratella Kak u teba bratan")
//confirm("Bratishka do you have to eat anything this moment ?")

// в виде переменной модальное окно
//let info = confirm("Bratishka do you have to eat anything this moment ?");
//console.log(info)

// Здесь пользовател в выпадающем окне может вводить ответ на вопрос
//let info = prompt("Есть ли вам 87 лет ?", "Да");
//console.log(info)
//проверка на тип данных
//console.log(typeof(info))
//////////////////////////
//УРОК 3 - ОПЕРАТОРЫ В JAVASCRIPT
console.log("arr" + "-object");
//let info = +prompt("Есть ли вам 87 лет ?", "Да");
//Унарный плюс превращает строку в число

//Инкремент и Декремент
let incr = 10,
    decr = 10;
    incr++;
    decr--;
    console.log(incr);
    console.log(decr);

    //console.log(++incr);
    //console.log(--decr);//Префиксная форма

   // console.log(incr++);
    //console.log(decr__);//Постфиксная форма записи
    console.log("2"==2);// Сравнивает по значениям
    console.log("2"===2);//Сравнение по типам данных

    //ОПераторы AND OR
    let isChecked = true,
        isClose = false;

    console.log(isChecked && isClose);// Оператор И
    console.log(isChecked || isClose);// Оператор ИЛИ
    