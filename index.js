// goal is to reverse each letter in each word of a string

const exampleSentence = 'alchemy rocks gold';



function reverseLettersOfString(sentence) {
  const splitSentence = sentence.split(' ');
  // console.log(splitSentence);
  return splitSentence.map((word) => word.split('').reverse().join('')).join(' ');
}

const reversedSentence = reverseLettersOfString(exampleSentence);
console.log(reversedSentence);


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





//FizzBuzz

// return array numbers 1 to n
// map through the array for each number test if its divisible by 3, 5, or both
// depending return number or Fizz, Buzz, FizzBuzz



function fizzBuzz(number) {
  const arr = Array(number).fill(1);
  // console.log('arr', arr);
  const newArr = arr.map((element, index) => {
    const indexAdj = index + 1;
    if (indexAdj % 3 === 0 && indexAdj % 5 === 0) {
      return 'FizzBuzz';
    }
    else if(indexAdj % 3 === 0) {
      return 'Fizz';
    }
    else if(indexAdj % 5 === 0) {
      return 'Buzz';
    }
    else {
      return indexAdj;
    }
  });

  console.log('newArr', newArr);

}

const array = fizzBuzz(16);
console.log('array', array);



function anagram(firstWord, secondWord) {
  const firstArr = firstWord.split('').sort().join();
  const secondArr = secondWord.split('').sort().join();
  return firstArr === secondArr;
}

console.log('superintended', 'unpredestined', anagram('superintended', 'unpredestined'));
console.log('pictorialness', 'documentarily', anagram('pictorialness', 'documentarily'));




const uniqueInput1 = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'];
const uniqueInput2 = ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'];


function uniqueString(strings) {
  const arr = strings.map((string) => {
    return string.split('')
      .sort()
      .map((eachLetter) => eachLetter.toLowerCase())
      .join('');
  });

  const set = new Set(arr);


  return [...set];
}

console.log(uniqueString(uniqueInput1));
console.log(uniqueString(uniqueInput2));
