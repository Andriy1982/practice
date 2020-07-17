// const reverse = (str) => {
//   let i = str.length - 1;
//   let result = "";
//   while (i >= 0) {
//     result = `${result}${str[i]}`;
//     console.log(result);
//     i = i - 1;
//   }

//   return result;
// };
// console.log(reverse("Hello"));

// const reverse = (str) => {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     result = `${result}${str[i]}`;
//   }

//   return result;
// };
// console.log(reverse("Hello"));

// Функция получает строку и возвращает новую строку  без символа (char)
/*const filterString = (str, char) => {
  let result = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== char) {
      result = `${result}${str[i]}`;
    }
  }
  return result;
};
console.log(filterString("Hello", "l"));*/

//Функция makeItFunny(), которая принимает на вход строку и возвращает ее копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
/*const makeItFunny = (str, n) => {
  let result = "";
  for (let i = 1; i <= str.length; i += 1) {
    if (i % n === 0) {
      result = `${result}${str[i - 1].toUpperCase()}`;
    } else {
      result = `${result}${str[i - 1]}`;
    }
  }
  return result;
};
console.log(makeItFunny("hello", 4));*/
