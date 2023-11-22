// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10,
// -999, 123, 3.14, 2.7, 16, true, false.
let s1 = 'hello'
let s2 = 'owu'
let s3 = 'com'
let s4 = 'ua'
let n1 = 1
let n2 = 10
let n3 = -999
let n4 = 123
let n5 = 3.14
let n6 = 2.7
let n7 = 16
let b1 = true
let b2 = false

//     Вивести кожну змінну за допомогою: console.log
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)
console.log(n6)
console.log(n7)
console.log(b1)
console.log(b2)
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
let firstName = 'Oleksandr'
let middleName = 'Volodymyrovich'
let lastName = 'Malyshev'
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let person = `${firstName} ${middleName} ${lastName}`
console.log(person)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100
let b = '100'
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let x= prompt('What is your name?')
let y= prompt( 'What is your middle name')
let z= +prompt( 'What is your age')
let full = `${x} ${y} ${z}`
console.log(full)
console.log(typeof z)
