// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, 
// на якій буде вся інформація про користувача (всі 15 полів) 
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
fetch('http://jsonplaceholder.typicode.com/users ')
    .then(value => value.json())
    .then(users => {
        const ulList = document.createElement('ul')
        for (const user of users) {
            const liList = document.createElement('li')
            liList.innerText = `${user.id} ${user.name}`
            const a = document.createElement('a')
            a.innerText = ' show information about this user'
            a.href = `user-details.html?id=` + JSON.stringify(user)
            a.style.textDecoration = 'none'

            liList.append(a)

            ulList.append(liList)
            document.body.append(ulList)
        }
    })