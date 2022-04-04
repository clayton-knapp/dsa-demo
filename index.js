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

const number1 = 121;
const number2 = 41;
const num1EvenOrOdd = oddishOrEvenish(number1);
const num2EvenOrOdd = oddishOrEvenish(number2);

console.log('num2EvenOrOdd', num2EvenOrOdd);
console.log('num2EvenOrOdd', num2EvenOrOdd);


