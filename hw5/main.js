// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle = (a, b) => a * b;
console.log(rectangle(5, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (a, b) => a * b ** 2;
console.log(circle(4, 5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (a, b, c) => 2 * a * b * c;
console.log(cylinder(2, 4, 6));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrF1 = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createPar = (text) => {
    document.write(`<p>${text}</p>`)
}
createPar('arrow function')
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
let createUl = (text) => {
    document.write(`<ul>
                     <li>${text}</li>
                     <li>${text}</li>
                     <li>${text}</li>
               </ul>`)
}
createUl(`first part`)
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createNewUl = (text, quantity) => {
    document.write(`<ul>`)
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createNewUl('second part', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
let arrToUl = (arr) => {
    document.write(`<ul>`)
    for (const arrayElement of arr) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}
arrToUl([10, true, 'kokos']);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrToDiv = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>
                          ${arr.id}
                          ${arr.name}
                          ${arr.age}
                        </div>`)

    }
}
// - створити функцію яка повертає найменьше число з масиву
let minNumber = (array) => {
    let minNumber = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i]
        }
    }
    return minNumber
}
let arr1 = [10, 6, -28]
console.log(minNumber(arr1));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
let arr2 = [1, 2, 10]
console.log(sum(arr2))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення
// у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let y = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = y
    return arr
}
console.log(swap([11, 22, 33, 44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let someValue = 1
    for (const currencies of currencyValues) {
        if (currencies.currency === exchangeCurrency){
            someValue = currencies.value
        }
    }
 return sumUAH/someValue
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));