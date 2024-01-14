//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
let url = new URL(location.href)
let infoPost = url.searchParams.get('postID')

fetch(`https://jsonplaceholder.typicode.com/posts/${infoPost}`)
    .then(value => value.json())
    .then(post => {
        console.log(post)
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper')

        for (const postKey in post) {
            let infoPost = document.createElement('p')

            infoPost.innerText = `${postKey}:${post[postKey]}`


            wrapper.append(infoPost)
        }
        let btn = document.createElement('button')
        btn.innerText = 'Show comments'
        wrapper.append(btn)

        document.body.appendChild(wrapper)
        let click = false

        btn.onclick = function () {
            if (!click){

            fetch(`https://jsonplaceholder.typicode.com/posts/${infoPost}/comments`)
                .then(value => value.json())
                .then(comments => {
                    console.log(comments)
                    let commentsWrapper = document.createElement('div')
                    commentsWrapper.classList.add('wrapperComments')


                    for (const comment of comments) {
                        console.log(comment)
                        let commentBlock = document.createElement('div')
                        commentBlock.classList.add('blockComment')
                        for (const commentKey in comment) {

                            let infoComment = document.createElement('p')
                            infoComment.innerText = `${commentKey}:${comment[commentKey]}`

                            commentBlock.append(infoComment)
                            commentsWrapper.append(commentBlock)
                        }

                    }
                    document.body.appendChild(commentsWrapper)

                })
        }
            click=true
        }

    })


