// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, 
// котра має детальну інфорацію  про об'єкт на який клікнули
// index.html - всі блоки з user - по 2 в рядок. кнопки/посилвння розташувати під інформацією про user.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        console.log(users)

        let wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')

        for (const user of users) {
            let userDiv = document.createElement('div')
            userDiv.classList.add('userDiv')

            let h2 = document.createElement('h2')
            h2.innerText = user.name
            h2.classList.add('userName')

            let p = document.createElement('p')
            p.innerText = 'id:' + ' ' + user.id
            p.classList.add('userId')

            let btn = document.createElement('button')
            btn.innerText = 'Show details'
            btn.onclick = function () {
                location.href = '../part2/user-details.html?user=' + JSON.stringify(user)
            }
            userDiv.append(h2, p, btn)
            wrapper.appendChild(userDiv)
        }
        document.body.appendChild(wrapper)
    })