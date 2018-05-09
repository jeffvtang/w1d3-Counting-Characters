let finalObject = {};

function countLetters(input) {
  input = splitLetters(input)
  //return input
  
}

//if else, if character exists +1 to value, else push attribute then +1 to value

function noSpace(oginput) {
  oginput = oginput.split(' ').join('');
  return oginput;
}

function splitLetters(newinput) {
  newinput = noSpace(newinput)
  newinput = newinput.split('')
  return newinput
}

console.log(countLetters("lighthouse in the house"))
// console.log(noSpace("lighthouse in the house"))
// console.log(splitLetters("lighthouse in the house"))
