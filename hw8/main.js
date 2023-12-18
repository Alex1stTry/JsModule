// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrOfUsers = [];
let user1 = new User(1, 'kokos', 'ignoroviy', 'adfv@gmail.com', +37950024555)
let user2 = new User(2, 'abrikos', 'selikonov', 'asgv@gmail.com', +37950056555)
let user3 = new User(3, 'abrikos', 'selikonov', 'asgv@gmail.com', +37950056555)
let user4 = new User(4, 'abrikos', 'selikonov', 'asgv@gmail.com', +37950056555)
let user5 = new User(5, 'abrikos', 'selikonov', 'asgv@gmail.com', +37950056555)
let user6 = new User(6, 'abrikos', 'selikonov', 'asgv@gmail.com', +37950056555)
let user7 = new User(7, 'abrikos', 'selikonov', 'asgv@gmail.com', +37950056555)
let user8 = new User(8, 'abrikos', 'selikonov', 'asgv@gmail.com', +37950056555)
let user9 = new User(9, 'abrikos', 'selikonov', 'asgv@gmail.com', +37950056555)
let user10 = new User(10, 'abrikos', 'selikonov', 'asgv@gmail.com', +37950056555)
arrOfUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
console.log(arrOfUsers)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = arrOfUsers.filter(user => user.id % 2 === 0);
console.log(filteredUsers)

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = arrOfUsers.sort((u1, u2) => {
    return u1.id - u2.id
})
console.log(sortedUsers)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let arrOfClients = [];
let client1 = new Client(1, 'alex', 'malyshev', 'immortal94@gmail.com', +30952216077, ['potato', 'tomato']);
let client2 = new Client(2, 'kolya', 'golovko', 'koly94@gmail.com', +30950016227, ['potato', 'tomato', 'cucumber']);
let client3 = new Client(3, 'vasya', 'ivanov', 'vasya94@gmail.com', +30950016227, ['potato', 'tomato', 'meat']);
let client4 = new Client(4, 'kokos', 'palmovuy', 'kokosl94@gmail.com', +30950226077, ['potato']);
let client5 = new Client(5, 'abrikos', 'derevnoy', 'abrikos94@gmail.com', +30220016077, ['cucumber', 'tomato']);
let client6 = new Client(6, 'igor', 'golovko', 'igorigor@gmail.com', +30950012277, []);
let client7 = new Client(7, 'andrey', 'gadjubabaev', 'andrey94@gmail.com', +32250016077, ['tomato']);
let client8 = new Client(8, 'petya', 'grechanik', 'petya@gmail.com', +30950012277, ['milk', 'cheese']);
let client9 = new Client(9, 'oleg', 'deonega', 'oleg94@gmail.com', +30950016022, ['bread']);
let client10 = new Client(10, 'vova', 'rosinskyi', 'vova@gmail.com', +30950012277, ['iPhones']);
arrOfClients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
console.log(arrOfClients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = arrOfClients.sort((c1, c2) => {
    return c1.order.length - c2.order.length
});
console.log(sortedClients)

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

        this.drive = function () {
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
        };
    this.info = function () {
        for (const fieldName in this) {
            if (typeof (this[fieldName]) != "function")
                console.log(`${fieldName} - ${this[fieldName]}`)

        }

    };
    this.info2 = function () {
        console.log('driver :', this.driver);
    }
    // в інфо прям треба було подумати
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver
    };

}

let car = new Car('volkswagen', 'germany', 2019, 260, 2.0)
car.drive();
console.log('__________');
car.info();
car.increaseMaxSpeed(20);
console.log('__________');
car.info();
car.changeYear(2021);
console.log('__________');
car.info();
console.log('__________');
car.addDriver({name: 'kokos', age: 25});
car.info();
car.info2()


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class BMW {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        for (const argumentsKey in this) {
            if (typeof (this[argumentsKey]) != "function") {
                console.log(`${argumentsKey} - ${this[argumentsKey]}`)
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed
    }

    changeYear(newValue) {
        this.year = newValue
    }
}

let bmw = new BMW('bmw', 'germany', 2020, 295, 4.4)
console.log('__________')
bmw.drive()
console.log('__________')
bmw.info()
console.log('__________')
bmw.increaseMaxSpeed(35)
bmw.info()
console.log('__________')
bmw.changeYear(2022)
bmw.info()
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('kokos', 25, 37);
let popel1 = new Popelushka('mandarinka', 22, 40);
let popel2 = new Popelushka('apelsinka', 21, 39);
let popel3 = new Popelushka('clubnika', 20, 36);
let popel4 = new Popelushka('malinka', 23, 38);
let popel5 = new Popelushka('alisa', 25, 37);
let popel6 = new Popelushka('golybika', 19, 36);
let popel7 = new Popelushka('egevika', 27, 39);
let popel8 = new Popelushka('arbuziha', 35, 44);
let popel9 = new Popelushka('dunya', 35, 44);
let popel10 = new Popelushka('povariha', 35, 44);
let arrOfPopel = []
arrOfPopel.push(popel1, popel2, popel3, popel4, popel5, popel6, popel7, popel8, popel9, popel10)
console.log(arrOfPopel)
for (const arrOfPopelElement of arrOfPopel) {
    if (arrOfPopelElement.footSize === prince.shoeSize) {
        console.log(arrOfPopelElement)
    }
}
console.log(arrOfPopel.find(popel => popel.footSize === prince.shoeSize));