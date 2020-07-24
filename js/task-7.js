const encrypt = (string) => {
  let result = "";

  if (string.length % 2 === 0) {
    for (let i = 1; i < string.length; i += 2) {
      result += `${string[i]}${string[i - 1]}`;
    }

    return console.log(result);
  }
  for (let i = 1; i < string.length - 1; i += 2) {
    result += `${string[i]}${string[i - 1]}`;
    console.log(result);
  }

  return console.log((result += `${string[string.length - 1]}`));
};

// encrypt("attack");

// Решение учителя:
// // BEGIN
// const encrypt = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i += 2) {
//         const nextSymbol = str[i + 1] || '';
//         result = `${result}${nextSymbol}${str[i]}`;
//     }

//     return result;
// };
// // END

// export default encrypt;
