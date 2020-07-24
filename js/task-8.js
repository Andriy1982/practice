// перебор строки і визначити чи є подібні букви
// **********************************
// / function isIsogram(str) {
//   let result = false;
//   for (let i = 0; i < str.length; i += 1) {
//     for (let j = 1 + i; j <= str.length - 1; j += 1) {
//       console.log(`${i}`);
//       console.log(`${j}`);
//       console.log(str[i].toLowerCase());
//       console.log(str[j].toLowerCase());
//       if (str[i].toLowerCase() === str[j].toLowerCase()) {
//         result = true;
//       }
//     }
//   }
//   return result;
//   //...
// }

// // console.log(isIsogram("Dermatoglyphics"));
// function isValidWalk(walk) {
//   if (walk.length !== 10) {
//     return false;
//   }

//   for (let i = 0; i < walk.length - 2; i += 1) {
//     // console.log(walk[i] !== walk[i + 2]);
//     if (walk[i] !== walk[i + 2]) {
//       return false;
//     }
//   }
//   //   if (walk.length === 10 ) {
//   //     return true;
//   //   }
//   return true;
// }

// console.log(
//   isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s", "s"])
// );

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// //   "should return true"

// console.log(
//   !isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
// );
// //   "should return false"
// console.log(!isValidWalk(["w"]));
// // "should return false");
// console.log(!isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
//   "should return false"

// const rowSumOddNumbers = function (n) {
//   let sumNumber = 0;
//   let arr = [];
//   let addNumber = 1;
//   for (let i = 1; i <= n; i += 1) {
//     sumNumber += i;
//     console.log(sumNumber);
//   }
//   for (let i = 1; i <= sumNumber; i += 1) {
//     arr.push(addNumber);
//     console.log(arr);
//     addNumber += 2;
//   }

//   let result = arr.splice(0, arr.length - n);
//   console.log(arr);
//   console.log(result);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]);
//     sum += arr[i];
//   }
//   console.log(sum);
// };
// rowSumOddNumbers(3);

// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

// function rowSumOddNumbers(n) {
//   return n * n * n;
// }

// const finalGrade = (exam, projects) => {
//   if (exam > 90 || projects > 10) {
//     return 100;
//   }
//   if (exam > 75 && projects >= 5) {
//     return 90;
//   }
//   if (exam > 50 && projects >= 2) {
//     return 75;
//   }
//   return 0;
// };
// console.log(finalGrade(85, 4));

// Числа Трибоначчі

// function tribonacci(signature, n) {
//   let result = signature;
//   let number;
//   for (let i = 3; i < n; i += 1) {
//     number = signature[i - 1] + signature[i - 2] + signature[i - 3];
//     result.push(number);
//   }
//   result.length = n;
//   return result;
// }

// console.log(tribonacci([0.5, 0.5, 0.5], 30));

// function findNb(m) {
//   // your code
//   let result = 0;
//   let number;
//   for (let i = 1; result < m; i += 1) {
//     result += i ** 3;
//     number = i;
//   }
//   if (result === m) {
//     return number;
//   } else {
//     return -1;
//   }
// }
// console.log(findNb(1071225));

// function findNb(m) {
//   var n = 0;
//   while (m > 0) m -= (++n) ** 3;
//   return m ? -1 : n;
// }

// function findNb(m) {
//   let n = 0;
//   let sum = 0;
//   while (sum < m) {
//     n++;
//     sum += Math.pow(n, 3);
//   }
//   return sum === m ? n : -1;
// }

// Рекурсия
// const sequenceSum = (a, b) => {
//   if (a > b) {
//     return NaN;
//   }
//   if (a === b) {
//     return b;
//   }
//   console.log(a);
//   console.log(b);

//   return a + sequenceSum(a + 1, b);
// };

// console.log(sequenceSum(12, 20));
