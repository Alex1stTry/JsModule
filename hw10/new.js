//Є сторінка index1.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


let session = JSON.parse(localStorage.getItem('time')) || []
window.onload = function () {
    let now = new Date()
    now.getTime()
    session.push(now)
    localStorage.setItem('time', JSON.stringify(session))
}