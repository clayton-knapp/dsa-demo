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


