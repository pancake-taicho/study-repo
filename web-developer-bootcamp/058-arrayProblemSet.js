//printReverse()

var list = [1, 2, 3, 4, 5, 6];

function printReverse() {
  var arrayLength = list.length;
  for(var i = arrayLength; i >= 0; i--) {
    console.log(list[i]);
  }
}

//isUniform()

var listOne = [1, 1, 1, 1, 3, 1, 1];
var listTwo = ["a", "a", "a", "a", "a", "a", "a", "a", ];
var listThree = ["a", "a", "a", "a", "a", "a", "b", "a", ];
var listFour = [1, 1, 1, "a", 1];

function isUniform(x) {
  var index = x[0];
  for(var i = 0; i < x.length; i++) {
    var check = x[i];
    if(check !== index) {
      return false;
    }     
  }
  return true;
}

//sumArray()

var numsOne = [1, 56, 347, 34, -6]; //432
var numsTwo = [-5, -35, -85, 100, 200]; //175
var numsThree = [1, 1, 1, 1, 1, 1, 1];  //7

function sumArray(x) {
  var total = 0;
  for(var i = 0; i < x.length; i++) {
    total += x[i];
  }
  console.log(total);
}

//max()

var numsFour = [1, 3456, 968, 0, -44];  //3456
var numsFive = [45, 2345, 87, -3456]; //2345
var numsSix = [54, 55, 56, 57, 58, 59]; //59
var numsSeven = [-1, -2, -3, -4, -5]; //-1

function max(x) {
  var max = x[0];
  for(var i = 0; i < x.length; i++) {
    if(max < x[i]) {
      max = x[i];
    }
  }
  console.log(max);
}