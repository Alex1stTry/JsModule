// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [39, true, 10500, false, 'kokos', 'vasya', 7001, true, 'max', 1234 ]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'star wars',
    pageCount: 777,
    genre: 'fantastic',
    authors: [
        {name: 'George Lucas', age:79},
        {name: 'Tim Lebbon', age:54}
    ]
}
let book2 = {
    title: 'harry potter',
    pageCount: 999,
    genre: 'fantasy',
    authors: [
        {name:'Joanne Rowling',age:58},
        {name:'somebody',age:40}
    ]
}
let book3 = {
    title: 'green Mile',
    pageCount: 555,
    genre: 'horror',
    authors: [
        {name:'Frank Darabont',age:64},
        {name:'Stephen King',age:76}
    ]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name:'alex',username:'svvs2',password:'qwe' },
    {name:'kolya',username:'ava23',password:'vsdw' },
    {name:'max',username:'zdvas',password:'svs' },
    {name:'mariya',username:'sdvs',password:'vswvb' },
    {name:'olya',username:'svsks',password:'asd123' },
    {name:'sergey',username:'svs3',password:'rtb' },
    {name:'vasya',username:'vsvw',password:'vdw' },
    {name:'koks',username:'zvwbbe',password:'iop' },
    {name:'petya',username:'vwwvkl',password:'edc' },
    {name:'ivan',username:'svv2b',password:'tgb' }
]
console.log(users[0]['password'])
console.log(users[1].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при x, що дорівнює 1, 0, -3
let x = 66;
if (x !== 0){
    console.log(true)
}else{
    console.log(false)
}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
 let time = +prompt('enter a number from 0 to 59');
 if (time >= 0 && time <= 15){
     console.log('first part');
 } else if (time > 15 && time <= 30){
     console.log('second part');
 } else if (time > 30 && time <=45){
     console.log('third part');
 }else if ( time > 45 && time <= 59 ){
     console.log('fourth part')
 }else{
     console.log('enter a number from 0 to 59!!!')
 }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15
if (day >= 1 && day <= 10){
    console.log('first')
}else if (day >10 && day <= 20){
    console.log('second')
}else if (day >20 && day <= 31){
    console.log('third')
}else {
    console.log('error, write a number from 1 up 31')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numberOfDay = 0
switch (numberOfDay) {
    case 1 :
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('enter a number of day from 1 to 7')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let y = -4
let z = -6
if ( y>z ){
    console.log(y)
}else if ( z>y ){
    console.log(z)
}else if( y === z){
    console.log('the same')
}else{
    console.log('write a numbs')
}
//
//     - є змінна q, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній q значення "default"
//         якщо значення змінної q являється falsy (хибноподібні, тобто приводиться до false
  let q = 0 || "default"
console.log(q)


//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration>5){
    console.log('super')
}else {
    console.log('=(')
}if(coursesAndDurationArray[1].monthDuration>5){
    console.log('super')
}else {
    console.log('=(')
}if(coursesAndDurationArray[2].monthDuration>5){
    console.log('super')
}else {
    console.log('=(')
}if(coursesAndDurationArray[3].monthDuration>5){
    console.log('super')
}else {
    console.log('=(')
}if(coursesAndDurationArray[4].monthDuration>5){
    console.log('super')
}else {
    console.log('=(')
}if(coursesAndDurationArray[5].monthDuration>5){
    console.log('super')
}else {
    console.log('=(')
}