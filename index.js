// TypeError: Reduce of empty array with no initial value

// EXAMPLE 1 - Specify initial value for accumulator variable

const arr = [];

const sum = arr.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log(sum); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 2 - Another example with filter()

// const arr = [2, 4, 6, 10];

// const sum = arr
//   .filter(element => element > 10)
//   .reduce((accumulator, current) => {
//     return accumulator + current;
//   }, 0);

// console.log(sum); // 👉️ 0
