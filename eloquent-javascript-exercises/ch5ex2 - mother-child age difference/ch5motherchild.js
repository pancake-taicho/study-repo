function average(array) {
  function plus(a, b) { return a + b }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDifference = [];

if (byName[(ancestry.person).mother]) {
  ageDifference.push(ancestry.person.born - ancestry.person.mother.born);
}

average(ageDifference);