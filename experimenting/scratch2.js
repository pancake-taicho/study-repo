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

// function multiplyNumeric(obj) {
//   for (let prop in obj) {
//     if (typeof obj[prop] == "number") {
//       obj[prop] *= 2;
//     }
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// console.log(menu);

// CLONING AN OBJECT:

// let user = {
//   name: "John",
//   age: 30,
// }

// let clone = {};

// for (let key in user) {
//   clone[key] = user[key];
// }

// console.log(clone);
// clone.name = "Mike";
// console.log(clone);

// OBJECT.ASSIGN:

// let user = { name: "John" }
// console.log(user);

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: false };

// Object.assign(user, permissions1, permissions2);
// console.log(user);

// // reassign properties with Object.assign:

// Object.assign(user, { name: "Pete" });
// console.log(user);

// // use Object.assign to replace a for...in loop for simple cloning:

// let clone = Object.assign({}, user);
// console.log(clone);
// // copies all properties of 'user' into empty object and returns it

// NESTED CLONING:

// let user = {
//   name: "John",
//   age: 30,
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// alert(user.sizes.height); // 182

// let clone = Object.assign({}, user);
// console.log(clone.sizes === user.sizes);

// user.sizes.width++; // 50 -> 51
// console.log(clone.sizes.width); // also 51, is simply referring to the data in 'user'

// For true deep cloning, using a recursive loop (how?) or 
// _.cloneDeep(obj) function from lodash (there are other libraries that can deep clone)