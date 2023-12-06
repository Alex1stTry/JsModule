// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world'
let b = 'lorem ipsum'
let c = 'javascript is cool'
console.log(a.length);
console.log(b.length);
console.log(c.length);
// - Перевест`и до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let a1 = 'HELLO WORLD'
let b1 = 'LOREM IPSUM'
let c1 = 'JAVASCRIPT IS COOL'
console.log(a1.toLocaleLowerCase());
console.log(b1.toLocaleLowerCase());
console.log(c1.toLocaleLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
let str1 = str.replace(' ', '');
console.log(str1.substring(12, length - 1));
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToArray = (str) => {
    return str.split(' ')
}
let str2 = 'Ревуть воли як ясла повні'
let arr = stringToArray(str2)
console.log(arr)

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . 
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let mapNums = nums.map(function (value) {
    return value + ''
});
console.log(mapNums)
// - створити функцію sortNums(direction),
// яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
function sortNums(arr, direction) {
    if (direction === 'ascending') {
        arrOfNums.sort((a, b) => {
            return a - b
        })
    }
    if (direction === 'descending') {
        arrOfNums.sort((a, b) => {
            return b - a
        })
    }
    return arrOfNums
}

let arrOfNums = [11, 21, 3];
console.log(sortNums(arrOfNums, 'ascending'));
console.log(sortNums(arrOfNums, 'descending'));

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortedCourses = coursesAndDurationArray.sort((c1, c2) => {
    return c2.monthDuration - c1.monthDuration
})
console.log(sortedCourses)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCourses = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(filteredCourses)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapCourses = coursesAndDurationArray.map(function (value, index) {
    return {...value, id: index + 1}
})
console.log(mapCourses)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade'-піка, 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
]
// - знайти піковий туз
console.log(cards.find(value => value.cardSuit === 'spade' && value.value === 'ace'));

// - всі шістки
let filteredCards = cards.filter(value => value.value === '6')
console.log(filteredCards)
// - всі червоні карти
let filteredReds = cards.filter(value => value.color === 'red')
console.log(filteredReds)
// - всі буби
let filteredDiamond = cards.filter(value => value.cardSuit === 'diamond')
console.log(filteredDiamond)
// - всі трефи від 9 та більше
let filtered = cards.filter(value => value.cardSuit === 'clubs' && value.value >= '9')
console.log(filtered)
//
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reducedCards = cards.reduce((accumulator, card) => {
if (card.cardSuit ==='spade'){
    accumulator.spades.push(card)
}else if (card.cardSuit === 'diamond'){
    accumulator.diamonds.push(card)
}else if(card.cardSuit === 'heart'){
    accumulator.hearts.push(card)
}else{
    accumulator.clubs.push(card)
} return accumulator
}, {spades: [], diamonds: [], hearts: [], clubs: []})
console.log(reducedCards)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
