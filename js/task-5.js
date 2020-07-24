const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const filterCountries = () => {
  if (maxPrice < 600) {
    return countries
      .filter((country, index) => {
        return countriesPrice[index] <= maxPrice;
      })
      .toString();
  }

  return countries.toString();
};

const getAllPropValues = function (arr, prop) {
  return arr.filter((item) => {
    if (item[prop]) {
      return item;
    }
  });
};
//   const stack = [];

//   for (const item of arr) {
//     if (item[prop]) {
//       stack.push(item[prop]);
//     }
//   }

//   return stack;
// };

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []
