// goal is to reverse each letter in each word of a string

const exampleSentence = 'alchemy rocks gold';



function reverseLettersOfString(sentence) {
  const splitSentence = sentence.split(' ');
  // console.log(splitSentence);
  return splitSentence.map((word) => word.split('').reverse().join('')).join(' ');
}

const reversedSentence = reverseLettersOfString(exampleSentence);
// console.log(reversedSentence);


//note reverse only works on arrays not string


function oddishOrEvenish(number) {
  //turn number into string then split
  const string = String(number);
  // console.log('string', string);
  const stringArr = string.split('');
  let x = 0;
  stringArr.map((string) => {
    x += Number(string);
    // console.log('x', x);
    // return x;
  });
  return x % 2 === 0 ? 'Evenish' : 'Oddish';
}


// Dan's way
//const sumOfDigits = number
// .toString()
// .split('');
// .map((digit) => Number(digit))
// .reduce((sum, n) => sum +n)
// return sumOfDigits % 2 ? 'Oddish' : 'Evenish';

const number1 = 121;
const number2 = 41;
const num1EvenOrOdd = oddishOrEvenish(number1);
const num2EvenOrOdd = oddishOrEvenish(number2);

console.log('num1EvenOrOdd', num1EvenOrOdd);
console.log('num2EvenOrOdd', num2EvenOrOdd);






const sampleArray = ['a', 'b', 'c', 'd', 'e'];

function at(arr, index) {
  if (index >= 0) {
    return arr[index];
  } else {
    const length = arr.length;
    const newIndex = length + index;
    return arr[newIndex];
  }
}

console.log('at 1', at(sampleArray, 1));
console.log('at 0', at(sampleArray, 0));
console.log('at -1', at(sampleArray, -1));
