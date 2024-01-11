 // 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
 // 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
 // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
 // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
 // котра має детальну інфу про поточний пост.
 // user-details.html - блок з інфою про user зверху сторінки.
 // Кнопка нижчє, на 90% ширини сторінки, по центру. блоки з короткою іфною про post - в ряд по 5 .
 let url = new URL(location.href)
 let user = url.searchParams.get('userId')
 let parsedUser = JSON.parse(user)
 console.log(parsedUser)
 const infoBlock = document.createElement('div')
 infoBlock.classList.add('infoBlock')
infoBlock.innerHTML = `
<p>Id: ${parsedUser.id}</p>
<p>Name: ${parsedUser.name}</p>
<p>Username: ${parsedUser.username}</p>
<p>Phone: ${parsedUser.phone}</p>
<p>Email: ${parsedUser.email}</p>
<p>Website: ${parsedUser.website}</p>
<p>City: ${parsedUser.address.city}</p>
<p>Geo.lat: ${parsedUser.address.geo.let}</p>
<p>Goe.lng: ${parsedUser.address.geo.lng}</p>
<p>Street: ${parsedUser.address.street}</p>
<p>Suite: ${parsedUser.address.suite}</p>
<p>Zipcode: ${parsedUser.address.zipcode}</p>
<p>Company${parsedUser.company.name}</p>
<p>Company.bs: ${parsedUser.company.bs}</p>
<p>CatchPhrase: ${parsedUser.company.catchPhrase}</p>
`
 document.body.appendChild(infoBlock)
 let btn = document.createElement('button')
 btn.innerText = 'Posts of current user'
 document.body.appendChild(btn)
 btn.classList.add('posts')



 btn.onclick = function () {
     fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
         .then(value => value.json())
         .then(posts => {
             console.log(posts)
             // const wrapper = document.createElement('div')
             // wrapper.classList.add('wrapper')
             // for (const post of posts) {
             //     let div = document.createElement('div')
             //     div.classList.add('postInfo')
             //     div.innerText = `${post.title}`
             //     wrapper.appendChild(div)
             //
             // }
             // wrapper.innerText = ''
             // document.body.appendChild(wrapper)
         })
 }

