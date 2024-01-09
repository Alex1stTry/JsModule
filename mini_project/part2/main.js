// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.
// user-details.html - блок з інфою про user зверху сторінки.
// Кнопка нижчє, на 90% ширини сторінки, по центру. блоки з короткою іфною про post - в ряд по 5 .
let url = new URL (location.href)
let user = url.searchParams.get('user')
let parsedUser = JSON.parse(user)
console.log(parsedUser)
const infoBlock = document.createElement('div')
infoBlock.innerHTML = `
<p>${parsedUser.id}</p>`
document.body.appendChild(infoBlock)

