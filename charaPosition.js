function countLetters(input) {
  let finalObject = {};
  input = splitLetters(input)
  for (let i = 0; i < input.length; i++) {
    if (input[i] == ' ') {
      continue
    } else if (finalObject[input[i]] === undefined) {
      finalObject[input[i]] = [i]
    } else {
      finalObject[input[i]].push(i)
    }
    // } else if (finalObject[input[i]] === undefined) {
    //   finalObject[input[i]] = i
    // } else {
    //   finalObject[input[i]] += ', ' + i
    // }
  }
  return finalObject
}

function noSpace(oginput) {
  oginput = oginput.split(' ').join('');
  return oginput;
}

function splitLetters(newinput) {
  // newinput = noSpace(newinput)
  newinput = newinput.split('')
  return newinput
}

console.log(countLetters("lighthouse in the house"))
