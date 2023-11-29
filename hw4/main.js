// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
    return a * b
}

console.log(rectangle(5, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(a, b) {
    return a * b ** 2
}

console.log(circle(3.14, 5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(a, b, c) {
    return 2 * a * b * c
}

console.log(cylinder(3.14, 5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
function allUsers(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphWriter(text) {
    document.write(`<p>${text}</p>`)
}

paragraphWriter('coolFunctions')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulWriter(text) {
    document.write(`<ul>
                     <li>${text}</li>
                     <li>${text}</li>
                     <li>${text}</li>
                    </ul>`)
}

ulWriter('your ad could be here')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function newUlWriter(text, quantity) {
    document.write(`<ul>`)
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

newUlWriter('some text', 2)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function fromArrToUl(array) {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}

let someArr = ['blabla', 5, true, false, 'igor']
fromArrToUl(someArr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function fromArrToDiv(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} 
                             ${arrayElement.name}
                             ${arrayElement.age}
                        </div>`)
    }
}

// - створити функцію яка повертає найменьше число з масиву
function minValue(array) {
    let minNumber = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i]
        }
    }
    return minNumber
}

let arr = [1, -10, 20, -35]
console.log(minValue(arr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sum(arr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr, index1, index2) {
    let x = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = x
    return arr
}

let arrNums = [11, 22, 33, 44]
console.log(swap([11, 22, 33, 44], 0, 1));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeValue = 1
    for (const currencies of currencyValues) {
        if (currencies.currency === exchangeCurrency) {
            exchangeValue = currencies.value;
        }
    }

    return  sumUAH / exchangeValue;


}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));