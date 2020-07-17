// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

// function isBigEnough(value) {
//   return value >= 25;
// }
// console.log(isBigEnough);

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered дорівнює [12, 130, 44]
// console.log(filtered);

const array = [25, 12, 55, 35, 68, 77, 23, 3, 94];

console.log(array);
// let arrayNew = [];

// for (let i = 0; i <= array.length; i += 1) {
//   if (array[i] >= array[i + 1]) {
//     // array[i + 1] = array[i];
//     // array[i] = array[i + 1];
//     arrayNew.push(array[i + 1]);
//     arrayNew.push(array[i]);
//     // console.log(array);
//     console.log(arrayNew);
//   } else arrayNew.push(array[i + 1]);
//   console.log(arrayNew);
// }

// function bubbleSortConcept1(arr) {
//   for (let j = arr.length - 1; j > 0; j--) {
//     for (let i = 0; i < j; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSortConcept1(array));

let arrayNew = [];
function bubbleSortConcept2(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arrayNew[i] = arr[i];
        arrayNew[i + 1] = temp;
        // console.log(arrayNew);
        // console.log(arr);
        // console.log(temp);
      }
    }
  }
  //   arrayNew.push(25);
  return console.log(arrayNew);
}
console.log(bubbleSortConcept2(array));
