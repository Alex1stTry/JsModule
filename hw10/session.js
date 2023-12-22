//Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let timeArray = JSON.parse(localStorage.getItem('time'))
for (const timeArrayElement of timeArray) {
    let divOfTime = document.createElement('div');
    divOfTime.innerText = timeArrayElement
    document.body.appendChild(divOfTime)
}