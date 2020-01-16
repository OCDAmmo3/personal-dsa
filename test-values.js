/*
===========================
ARRAYS WITH NUMBERS
===========================
*/

const arrayMaker10 = () => {
  let array = [];
  for(let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}

const arrayMaker100 = () => {
  let array = [];
  for(let i = 0; i < 100; i++) {
    array.push(i);
  }
  return array;
}

const arrayMaker1000 = () => {
  let array = [];
  for(let i = 0; i < 1000; i++) {
    array.push(i);
  }
  return array;
}

const arrayMaker10000 = () => {
  let array = [];
  for(let i = 0; i < 10000; i++) {
    array.push(i);
  }
  return array;
}

const arrayMaker100000 = () => {
  let array = [];
  for(let i = 0; i < 100000; i++) {
    array.push(i);
  }
  return array;
}

const arrayMaker1000000 = () => {
  let array = [];
  for(let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return array;
}

const arrays = [arrayMaker10(),arrayMaker100(),arrayMaker1000(),arrayMaker10000(),arrayMaker100000(),arrayMaker1000000()];

const arrayDuplicates = [1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]

/*
===========================
ARRAYS WITH WORDS
===========================
*/

const wordArrayAlphabet = ['apple','balloon','car','dog','eye','fish','great','happy','igloo','journey','kangaroo','little','mouse','ninja','octopus','purple','queen','robust','space','train','umbrella','violin','water','xylophone','yarn','zebra'];

const wordArrayDoubles = ['soon','water','book','fish','alphabet','apple','balloon','car','care','soup','rubble','bubble','trouble'];

const wordArrayLengths = ['a','be','can','this','great','partly','example','partison','board game','absolutely','accessories','compensation','significantly'];

const wordArrayPalindromes = ['race car','mom','dad','taco cat','madam','Was it a car or a cat I saw'];

/*
===========================
WORDS
===========================
*/

const cat = 'cat';
const dog = 'dog';
const sentence1 = 'There once was a young wart hog';
const sentence2 = 'He ate chicken when he turned 40';
const sentence3 = 'I\'m a deeply rage induced alcoholic';
const sentence4 = 'How many soups are in a 7?';

/*
===========================
MATRICES
===========================
*/

const matrixNumbersOnly = [
  [1,2,3,4,5,6,7,8,9,10],
  [11,12,13,14,15,16,17,18,19,20],
  [21,22,23,24,25,26,27,28,29,30],
  [31,32,33,34,35,36,37,38,39,40],
  [41,42,43,44,45,46,47,48,49,50]
];

const matrixMixedArrays = [
  [1,2,3,4,5,6,7,8,9,10],
  ['one','two','three','four','five','six','seven','eight','nine','ten'],
  [11,12,13,14,15,16,17,18,19,20],
  ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty']
];

const matrixArraysMixed = [
  [1,'two',3,'four',5,'six',7,'eight',9,'ten'],
  [11,'twelve',13,'fourteen',15,'sixteen',17,'eighteen',19,'twenty'],
  [21,'twenty two',23,'twenty four',25,'twenty six',27,'twenty eight',29,'thirty'],
  [31,'thirty two',33,'thirty four',35,'thirty six',37,'thirty eight',39,'forty']
]

module.exports = {
  arrays, arrayDuplicates, wordArrayAlphabet, wordArrayDoubles, wordArrayLengths, wordArrayPalindromes, cat, dog, sentence1, sentence2, sentence3, sentence4,matrixNumbersOnly, matrixMixedArrays, matrixArraysMixed
}