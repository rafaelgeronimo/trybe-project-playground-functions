/** RAFAEL GERONIMO | TRYBE | #VQV */
// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let words = [];
  return words = phrase.split(' ');
}

// Desafio 4
function concatName(names) {
  let firstAndLast = "";
  return firstAndLast = firstAndLast.concat(names[names.length -1] + ', ' + names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  return points = wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highestNumber = numbers.reduce(function(a, b) {
  	return Math.max(a, b);
  })
  for(let index = 0; index < numbers.length; index += 1){
  	if(numbers[index] === highestNumber){
    	count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
