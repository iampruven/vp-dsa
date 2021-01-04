//create a function that reverses a string

//first way
function reverseStringz(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'please provide valid string';
  }

  let newS = str.split('');
  let newPhrase = [];
  for (let i = newS.length - 1; i >= 0; i--) {
    newPhrase.push(newS[i]);
  }
  return newPhrase.join('');
}
//reverseStringz(2);
reverseStringz('Hello world');


// -------------


//second way
function reverseS(str) {
  return str.split('').reverse().join('');
}

reverseS('hello me');
