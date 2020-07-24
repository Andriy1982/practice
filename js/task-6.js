const foo = function (name, secondName, a, b) {
  console.log(`Hello ${name}`);
  console.log(`Hello ${secondName}`);
  // return console.log(a + b);
  return a + b;
};

const fn = function (a, b, c, y) {
  console.log(a + b + c + y);
  console.log(a + b + c);
};

fn(5, 25, 77, foo(64));

// setTimeout(function () {
//   console.log(`Hello after 3000ms`);
// }, 3000);

// const addName = function (qwe) {
//   const name = "Mango";
//   const secondName = "Poly";

//   console.log(qwe);
//   qwe(44, 63, 54, 64);
// };

// // console.log(addName(foo("ttt")));
// addName(fn);

// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = "HOCs are awesome";
//   const str = " We was in park";
//   console.log(callback);
//   callback(string + str);
// };

// higherOrderFunction(printMessage);

// const repeatLog = function (n, qwe) {
//   for (let i = 0; i < n; i += 1) {
//     qwe(i);
//   }
//   console.log(qwe);
// };

// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log("Logging value: ", value);
// };

// repeatLog(4, prettyPrint);
// repeatLog(4, printValue);

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
//   console.log(action);
// };

// const labels = [];

// repeat(5, (value) => {
//   labels.push(`Label ${value + 1}`);
//   console.log(value);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     console.log(element);
//     const passed = test(element);
//     console.log(test(element));
//     if (passed) {
//       filteredElements.push(element);
//     }
//   }
//   console.log(test);
//   return filteredElements;
// };

// const isFruitsName = function (fruitsName) {
//   return "bananas" === fruitsName.name;
// };

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// // const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
// // console.log(freshFruits); // массив с объектами apples и bananas

// // const fruitsWithQuantity = filter(fruits, (fruit) => fruit.quantity >= 120);
// // console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// // const freshBanan = filter(fruits, (fruit) => fruit.name === "bananas");
// // console.log(freshBanan); // массив с объектами apples и bananas

// const freshBanan = filter(fruits, isFruitsName);
// console.log(freshBanan); // массив с объектами apples и bananas

const makeDish = function (sheffName, dish) {
  console.log(`${sheffName} готовит ${dish}`);
};

// makeDish("Mango", "yyy");
// makeDish("Mango", "ydsggdy");
// makeDish("Mango", "yysdafghhy");

// makeDish("Poly", "jjsfdl");
// makeDish("Poly", "jsdfjl");
// makeDish("Poly", "jcbhjl");

const makeSheff = function (name) {
  console.log(name);

  return function (dish) {
    console.log(`${name} готовит ${dish}`);
  };
};

const mango = makeSheff("Mango");
const poly = makeSheff("Poly");

mango("kotlatu");
console.dir(mango);
