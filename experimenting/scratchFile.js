// let user1 = {
//   firstName: "John",
// };

// let user2 = null; // Maybe we couldn't authorize the user

// let key = "firstName";

// alert( user1?.[key] ); // John
// alert( user2?.[key] ); // undefined

// alert( user1?.[key].something?.not?.existing); // undefined

// delete user?.name; // ?. works with 'delete'

// let user = null;

// user?.name = "John"; // Error, doesn't work because it 
// // evaluates to undefined = "John".
// // ?. is safe for reading and deleting, but not writing

// ----

// id is a new symbol
let id = Symbol();

// id is a symbol with the description "id"
let id = Symbol("id");

// Symbols are guaranteed to be unique, even if two Symbols have the same description. 
// The description is just a label. It doesn't affect anything.
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// Symbols are a special value and don't auto-convert to a string
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol to a string

// To show a symbol, explicitly call .toString() on it:
let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

// Or use symbol.description property to show the description only
let id = Symbol("id");
alert(id.description); // id

// Symbols allow us to create "hidden" properties of an object
// that can't be accidentally accessed or overwritten by
// another part of the code
let user = {
  name: "John"
//id: Symbol("id") <-- might look the same, but it's different.
// also, user.id vs user[id]?
};

// STRING 'id' VS SYMBOL
// Because symbols are always different, they can't accidentally be tampered with 
//by other code, i.e. third-party code.
// Also, this way, another script can safely have its own identifier 
// inside the third-party code
let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // we can access the data using the symbol as the key

// string 'id'
let user = { name: "John" };

// Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants 'id' for its purposes...
user.id = "Their id value"
// Boom! Overwritten by another script!

// To use a symbol in an object literal, we need to use square brackets around it:
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not 'id: 123'
};

// That's because we need the value from the variable 'id' as the key,
// not the string 'id'.

// Symbols are skipped in 'for...in'
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] );