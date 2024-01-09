// створити 3 обʼєкти через {}

let dish = {
    dishName: "Assorted pickles",
    categoryName: "Apperitives",
    dishId: 1134,
    isAvailable: true,
    allergens: [
        'pepper', 'mashrooms', 'sugar'
    ],
    details() {
        let stopList = this.isAvailable ? "ready for order" : "out of stock";
        console.log(`The ${this.dishName} is ${stopList}.`);
    }
};

console.log(dish);

let category = {
    categoryName: "Main dishes",
    categoryIg: 3345,
    "full description": {
        lang: "en",
        text: "Big portions with meat and vegetables"
    }
};

console.log(category);

let menu = {
    categories: [
        category.categoryName, category.categoryIg
    ],
    waiter: "Aurora",
    tips: false,
    type: {
        delivery: true,
        "on table": true
    }
};

console.log(menu);

// створити 3 обʼєкти через Object()

let order = new Object( {
    countPositio: 2,
    totalPrice: 26.6,
    dish: dish,
} );

console.log(order);

let preOrder = Object();

preOrder.waiter = menu.waiter;
preOrder.isDelivery = menu.type.delivery;
preOrder.items = dish;
//preOrder.comment = dish.details(),

console.log(preOrder);

let table = new Object();

table.number = 4;
table['main waiters'] = ["Marie", "Alex"];
table.isAvailable = false;


console.log(table);

// створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі

let dishVariants = Object.create(dish);

dishVariants.dishName = "Sweet potatoes";
dishVariants.additionalInfo = "This portion is for 2 people";

console.log(dishVariants);
console.log(dishVariants.isAvailable);

let position = {
    dishName: "Tomato soup",
    dishId: 874,
    allergens: [
        'tomato', 'onions'
    ],
    __proto__: dish,
};

console.log(position);
console.log(position.categoryName);

// створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)

let engineer = {
    project: "Restaurants",
    level: "middle",
    "work schedule": "full-time",
};

let QA_engineer = {
    "testing area": [ 
        'front-end', 'DB', 'back-end'
    ],
    yearsOfExperience: 3
};

QA_engineer.__proto__ = engineer;

console.log(Object.getPrototypeOf(QA_engineer));
console.log(QA_engineer); // or console.log(Object.entries(QA_engineer)) 

// унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

let person = {
    name: "Maryna",
    age: 29,
    "work schedule": "part-time",
};

engineer.__proto__ = person;

console.log(Object.getPrototypeOf(engineer));
console.log(Object.getPrototypeOf(QA_engineer));
console.log(QA_engineer);