//Functional instantiation

/*
const Animal = (species, name) => {
  let obj = {};

  obj.species = species;
  obj.name = name;

  obj.makeSound = () => "Meow";

  obj.eat = () => "Nom";

  obj.sleep = () => "Zzz";

  return obj;
}

let kitty = Animal("cat", "meowzer");
console.log(kitty.name);
console.log(kitty.eat());
console.log(kitty.sleep());
*/

//Functional shared instantiation

/*
const Animal = (species, name) => {
  let obj = {};

  obj.species = species;
  obj.name = name;

  extend(obj, objMethods);

  return obj;
}

let extend = (obj, methods) => {
  for (let key in methods) {
    obj[key] = methods[key];
  }
}

let objMethods = {
  makeSound: function() {
    return console.log("Meow");
  },

  eat: function() {
    return console.log("Nom");
  },

  sleep: function() {
    return console.log("Zzz");
  }
};

let kitty = Animal('cat', 'Meowzer');
kitty.makeSound();
kitty.sleep();

let dog = Animal('dog', 'Yeller');
dog.sleep();
*/

//Prototypal instantiation

/*
let Animal = (species, name) => {
  let obj = Object.create(objMethods);
  
  obj.species = species;
  obj.name = name;

  return obj;
}

let objMethods = {
  makeSound: function(species) {
    if (species === 'cat') {
      return console.log("Meow");
    }

    if (species === 'dog') {
      return console.log("Woof");
    }
  },

  sleep: function() {
    return console.log("Zzz");
  },

  eat: function() {
    return console.log("Nom");
  }
};

let doggy = Animal('dog', 'Yeller');
doggy.makeSound('dog');
*/

//Pseudoclassical instantiation

let Animal = function(species, name) {

  this.species = species;
  this.name = name;
}

Animal.prototype.makeSound = (species) => {
  if (species === "cat") {
    return console.log("Meow");
  }

  if (species === "dog") {
    return console.log("Woof");
  }
};

Animal.prototype.sleep = () => console.log("Zzz");

Animal.prototype.eat = () => console.log("Nom");

let kitty = new Animal("cat", "Meowzer");
kitty.makeSound("cat");