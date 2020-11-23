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

//GLOBAL SYMBOLS:
// Symbol.for(key) to read or create a symbol in the global symbol registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again, maybe from another part of the code
let idAgain = Symbol.for("id");

// the same symbol:
alert( id === idAgain ); // true

// Symbol.keyFor(sym) does the reverse of Symbol.for(key),
// it returns a name from a global symbol.
// get symbol by name:
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol:
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

// Symbol.keyFor only works for global symbols.
// Non-global symbols will return 'undefined',
// but every symbol has the 'description' property:

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name
alert( Symbol.keyFor(localSymbol) ); // undefined, not a global symbol

alert( localSymbol.description ); // name

// SYSTEM SYMBOLS:
// There exist many system symbol that JavaScript uses internally.
// They can be used to fine-tune various aspects of our objects:

// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive
// and so on...

// SUMMARY

// 'Symbol' is a primitive type for unique identifiers.

// Symbols are created with the 'Symbol()' call with an optional description (name).

// Symbols are always different values, even if they have the same name.
// If we want same-named symbols to be equal, then we should use the global registry:
// 'Symbol.for(key)' returns (or creates, if needed) a global symbol
// with 'key' as the name. Multiple calls of 'Symbol.for' with the same 'key'
// return exactly the same symbol.

// Symbols have two main use cases:
// 1. 'Hidden' object properties. If we want to add a property into an object that
//    'belongs' to another script or a library, we can create a symbol and us it
//    as a property key. A symbolic property does not appear in a 'for...in' loop,
//    so it won't be accidentally processed together with other properties. Also, 
//    it won't be accessed directly, because another script doesn't have our symbol.
//    So the property will be protected from an accidental use or overwrite.
//
//    So we can covertly 'hide' something in objects that we need, but others
//    should not see, using symbolic properties.
//
// 2. There are many system symbols used by JavaScript which are accessible as 
//    'Symbol.*'. We can use them to alter some built-in behaviors. 

// Technically, symbols are not 100% hidden. There is a built-in method
// 'Object.getOwnPropertySymbols(obj)' that allows us to get all symbols.
// Also, there is a method named 'Reflect.ownKeys(obj)' that returns *all* keys
// of an object, including symbolic ones. So they are not really hidden. 
// But most libraries, built-in functions, and syntax constructs don't use these
// methods.