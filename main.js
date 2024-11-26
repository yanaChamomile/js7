/*
#gsKLAsNWM
*Через Array.prototype. створити власний foreach, filter
*/
/*1*/
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = new User(1, 'January', 'winter', 'january@winter.com', '+014785');
console.log(user);
const users = [
    new User(1, 'January', 'winter', 'january@winter.com', '+014785'),
    new User(2, 'February', 'winter', 'february@winter.com', '+02754'),
    new User(10, 'October', 'autumn', 'October@autumn.com', '+01088923'),
    new User(8, 'August', 'summer', 'August@summer.com', '+0869214'),
    new User(3, 'March', 'spring', 'march@spring.com', '+0356874'),
    new User(4, 'April', 'spring', 'april@spring.com', '+048965'),
    new User(9, 'September', 'autumn', 'September@autumn.com', '+098604'),
    new User(5, 'May', 'spring', 'may@wspring.com', '+054789'),
    new User(6, 'June', 'summer', 'June@summer.com', '+0632871'),
    new User(7, 'July', 'summer', 'jJuly@summer.com', '+079862'),
];
console.log(users);
/*2*/
  let filterFunction = user => user.id % 2 === 0;
  const filterUsers = users.filter(filterFunction);
  console.log(filterUsers);

/*3*/
let sortFunction =(user1, user2) => user1.id - user2.id;
console.log(users.sort(sortFunction));

/*4*/
function Client (id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
const client = new Client(1, 'Name', '2Name', 'email@com', '+3804785',{article: 'englisch', time: '6m'});
const clients = [
    new Client(1, 'Name', '2Name', 'email@com', '+3804785',[{article: 'englisch', time: '6m'}, {article: 'portuguese', time: '5m'},{article: 'french', time: '8m'}]),
    new Client(102, 'Name', '2Name', 'email@com', '+3808985',[{article: 'latin', time: '3m'}, {article: 'ukrainian', time: '6m'}]),
    new Client(103, 'Name', '2Name', 'email@com', '+38746333',[{article: 'german', time: '9m'}]),
    new Client(104, 'Name', '2Name', 'email@com', '+38068785',[{article: 'french', time: '8m'}, {article: 'englisch', time: '6m'}]),
    new Client(105, 'Name', '2Name', 'email@com', '+38042695',[{article: 'spanish', time: '7m'}]),
    new Client(106, 'Name', '2Name', 'email@com', '+38047487',[{article: 'chinese', time: '12m'},{article: 'hindi', time: '13m'}]),
    new Client(107, 'Name', '2Name', 'email@com', '+38040074',[{article: 'mandarin', time: '11m'}]),
    new Client(108, 'Name', '2Name', 'email@com', '+3809105',[{article: 'hindi', time: '13'}, {article: 'mandarin', time: '11m'}, {article: 'latin', time: '3m'}]),
    new Client(109, 'Name', '2Name', 'email@com', '+380478984',[{article: 'ukrainian', time: '6m'}]),
    new Client(110, 'Name', '2Name', 'email@com', '+380478970',[{article: 'portuguese', time: '5m'}]),
];
    console.log(Client);

 /*
function Shopper (id, name, surname, email, phone, ...products ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}
function Product(title, price) {
    this.title = title;
    this.price = price;
}

const shopper = new Shopper(1,
    'name',
    '2name',
    'name2name@com',
    '+38456970',
    new Product('lamp', 250),
    new Product('sofa', 25000)
    );
let shoppers = [
   new Shopper (1, 'name', '2name', 'name2name@com','+3845410',
       [new Product('lamp', 250),
                 new Product('sofa', 25000)]),
    new Shopper (2, 'name', '2name', 'name2name@com','+38400014',
        [new Product('tv', 3100),
                  new Product('oven', 18000)]),
    new Shopper (3, 'name', '2name', 'name2name@com','+3855440',
        [new Product('mirror', 580),
                  new Product('stone', 740)]),
]
console.log(shoppers.order);
*/

/*5*/
let sort = clients.sort(( a, b) => a.order.length - b.order.length);
console.log(sort);

/*6*/
function Car(model, producer, year, maxSpeed, enginCapacity) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.enginCapacity = enginCapacity
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    this.changeYear = function (newValue) {
        if (newValue > 1815) this.year = newValue;
    };
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}
const car = new Car('auto', 'mercury', 1905, 20, 3);
console.log(car);
car.drive ();
car.info ();
car.increaseMaxSpeed(150);
car.changeYear(1905);
car.addDriver({});
console.log(car);
/*7*/
class Auto{
    constructor(model, producer, year, maxSpeed, enginCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.enginCapacity = enginCapacity;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed (speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    changeYear (newValue) {
        if (newValue > 1815) this.year = newValue;
    };
    addDriver (driver) {
        if (driver) this.driver = driver;
    };
}
const auto = new Auto('auto', 'mercury', 1815, 10, 2);
console.log(auto);
auto.drive ();
auto.info ();
auto.increaseMaxSpeed(320);
auto.changeYear(2020);
auto.addDriver({});
console.log(auto);

/*8
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
*/


