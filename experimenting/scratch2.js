// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// function isEmpty(obj) {
//   for (let prop in obj) {
//     return false;
//   }
//   return true;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for(let prop in salaries) {
//   sum += salaries[prop];
// }

// alert(sum);

// finding sum with a function:
// function salarySum(obj) {
//   let sum = 0;
//   for (let prop in obj) {
//     sum += obj[prop];
//   }
//   return sum;
// }

// console.log(salarySum(salaries));

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] == "number") {
      obj[prop] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);