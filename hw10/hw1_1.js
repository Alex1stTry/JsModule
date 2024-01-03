// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let f1 = document.forms['f1']
f1.onsubmit = function (e) {
    e.preventDefault()
    let div = document.createElement('div')
    let user = {name:this.userName.value, surname:this.userSur.value, age: this.userAge.value}
    div.innerText = user
    document.body.append(div)

}
