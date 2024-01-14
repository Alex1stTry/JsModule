// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.
// user-details.html - блок з інфою про user зверху сторінки.
// Кнопка нижчє, на 90% ширини сторінки, по центру. блоки з короткою іфною про post - в ряд по 5 .
let url = new URL(location.href)
let user = url.searchParams.get('userId')

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')


// let promise = fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
//     .then(value => value.json())
//     .then(value => {
//         let userBlock = document.createElement('div')
//         function iterator (){
//             for (const fieldName in value) {
//                 let p = document.createElement('p')
//                 p.innerText = `${fieldName}:${(value[fieldName])}`
//                 userBlock.appendChild(p)
//                 if (typeof (fieldName) === "object") {
//                     iterator(fieldName)
//                 }
//             }
//         }
//         iterator(value)
// wrapper.appendChild(userBlock)
//     });
//     не працює

// fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
//     .then(value => value.json())
//     .then(value => {
//
//         let userBlock = document.createElement('div')
//         for (const valueKey in value) {
//             let p = document.createElement('p')
//             p.innerText = `${valueKey}:${JSON.stringify(value[valueKey])}`
//             userBlock.appendChild(p)
//             wrapper.appendChild(userBlock)
//             if (typeof (JSON.stringify(value[valueKey]))==="string"){
//
//             }
//         }
//
//     });
//      теж не те, щоб хотілось
fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
    .then(value => value.json())
    .then(value => {
        console.log(value)

        let divInfo = document.createElement('div')
        divInfo.innerHTML = `
        <p>Id: ${value.id}</p>
        <p>Name: ${value.name}</p>
        <p>User_Name: ${value.userName}</p>
        <p>User_email: ${value.email}</p>
        <p>User_phone: ${value.phone}</p>
        <p>User_website: ${value.website}</p>
        <p>City: ${value.address.city}</p>
        <p>Geo_lat: ${value.address.geo.lat}</p>
        <p>Geo_lng: ${value.address.geo.lng}</p>
        <p>Street: ${value.address.street}</p>
        <p>Suit: ${value.address.suite}</p>
        <p>Zipcode: ${value.address.zipcode}</p>
        <p>Company_name: ${value.company.name}</p>
        <p>Company_catch_phrase: ${value.company.catchPhrase}</p>
        <p>Company_bs: ${value.company.bs}</p>
`
        divInfo.classList.add('divInfo')
        wrapper.appendChild(divInfo)

    })
// примітивно,довго,мені не подобаєтьсяБале працює


document.body.appendChild(wrapper)
let btn = document.createElement('button')
btn.innerText = 'Posts of current user'
document.body.appendChild(btn)
btn.classList.add('postShortInfo')

let click = false

btn.onclick = function () {
    if (!click) {
        fetch(`https://jsonplaceholder.typicode.com/users/${user}/posts`)
            .then(value => value.json())
            .then(posts => {
                console.log(posts)
                let postWrapper = document.createElement('div')
                postWrapper.innerText = ''
                postWrapper.classList.add('postWrapper')
                for (const post of posts) {
                    let div = document.createElement('div')
                    div.classList.add('postInfo')

                    let h2 = document.createElement('h2')
                    let p = document.createElement('p')

                    h2.innerText = `Post_id: ${post.id}`
                    p.innerText = `Post_title: ${post.title}`

                    let postBtn = document.createElement('button')
                    postBtn.innerText = 'Show current post'

                    div.append(h2, p, postBtn)
                    postWrapper.appendChild(div)

                    postBtn.onclick = function (){
                        location.href =`../part3/post_details.html?postID=${post.id}`
                    }
                }
                document.body.appendChild(postWrapper)
            })
    }
    click = true
}

