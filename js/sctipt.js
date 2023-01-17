// console.log("Hello, world!")
// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)

// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students -= 50;
// students += 20;
// students += 40;
// console.log(students);

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - (2 * 5);
// console.log(result);

// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.4;
// console.log(Math.round(value));


// АВТОПЕРЕВІРКИ

// Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);


// function add(a, b, c) {
//   // Change code below this line
// // console.log(return);
// return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


// function makeMessage(name, price) {
//   // Change code below this line
 
// console.log(`You picked ${name}, price per item is ${price} credits`);

// }

// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (customerCredits > totalPrice) {
//     let message = 'Insufficient funds!'
//   }
//   else {
//     let message = 'You ordered 10 droids, you have 0 credits left'
//   }
//  // let totalPrice = pricePerDroid * orderedQuantity;
//   // Change code below this line

//   // Change code above this line
//   return message;
//   // return totalPrice;
//   console.log(totalPrice)
// }
// makeTransaction(5, 10, 100);



// const pricePerDroid = 5;
// const orderedQuantity = 10;
// const totalPrice = pricePerDroid * orderedQuantity;
// console.log(totalPrice);

//-----------------------------------------------------
// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

//-----------------------------------------------------
// function foo(num) {
//   console.log("foo:", num);
//   // console.log(this);
//   foo.count++;
// }

// foo.count = 0;

// foo(5);
// foo(3);
// foo(19);
// foo(5);

// // console.dir(foo);
// console.log(foo.count);

//-----------------------------------------------------

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

//-----------------------------------------------------

// "/this в callback-функціях/ Пояснить яким чином повязани  getFullName та callback()  /
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(
//   customer.getFullName.bind(customer)
// ); // Буде помилка у виклику функції"

//-----------------------------------------------------

// function greet(clientName) {
//   console.log( `${clientName}, ласкаво просимо в «${this.service}».`);
  
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."


// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

//-----------------------------------------------------

// function foo() {
//   console.log(this.a);
// }

// window.a = 5;

// foo();

// const obj = {
//     a: 10,
//     showA: foo
// }

// obj.showA()

//-----------------------------------------------------

//* Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    console.log(this)
    // const currentStone = this.stones.find((stone) => stoneName === stone.name);
    // return currentStone.price * currentStone.quantity;
  },
};

console.log(chopShop.calcTotalPrice("Emerald")); // 5200
console.log(chopShop.calcTotalPrice("Diamond")); // 8100
console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop.calcTotalPrice("Ruby")); // 1600