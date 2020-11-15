let user = {
  name: "John",
  money: 1000,

  toString() {
    return `{name: "${this.name}"}`;
  },

  valueOf() {
    return this.money;
  }
};

let user2 = {
  name: "Bob",
  money: 1500,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

alert(user);
alert(+user);
alert(user + 500);

alert(user2);
alert(+user2);
alert(user2 + 500);
alert(user2 + " Hello!");