import { v4 as uuidv4 } from "uuid";

export const words = [
  { _id: uuidv4(), title: "aa" },
  { _id: uuidv4(), title: "aah" },
  { _id: uuidv4(), title: "aahed" },
  { _id: uuidv4(), title: "aahing" },
  { _id: uuidv4(), title: "aahs" },
  { _id: uuidv4(), title: "aal" },
  { _id: uuidv4(), title: "aalii" },
  { _id: uuidv4(), title: "aaliis" },
  { _id: uuidv4(), title: "aals" },
  { _id: uuidv4(), title: "aardvark" },
  { _id: uuidv4(), title: "aardvarks" },
  { _id: uuidv4(), title: "aardwolf" },
  { _id: uuidv4(), title: "aardwolves" },
  { _id: uuidv4(), title: "aargh" },
  { _id: uuidv4(), title: "aarrgh" },
  { _id: uuidv4(), title: "aarrghh" },
  { _id: uuidv4(), title: "aas" },
  { _id: uuidv4(), title: "aasvogel" },
  { _id: uuidv4(), title: "aasvogels" },
  { _id: uuidv4(), title: "ab" },
];

const scores = [
  { letter: "A", count: 9, value: 1 },
  { letter: "B", count: 2, value: 3 },
  { letter: "C", count: 2, value: 3 },
  { letter: "D", count: 4, value: 2 },
  { letter: "E", count: 12, value: 1 },
  { letter: "F", count: 2, value: 4 },
  { letter: "G", count: 3, value: 2 },
  { letter: "H", count: 2, value: 4 },
  { letter: "I", count: 9, value: 1 },
  { letter: "J", count: 1, value: 8 },
  { letter: "K", count: 1, value: 5 },
  { letter: "L", count: 4, value: 1 },
  { letter: "M", count: 2, value: 3 },
  { letter: "N", count: 6, value: 1 },
  { letter: "O", count: 8, value: 1 },
  { letter: "P", count: 2, value: 3 },
  { letter: "Q", count: 1, value: 10 },
  { letter: "R", count: 6, value: 1 },
  { letter: "S", count: 4, value: 1 },
  { letter: "T", count: 6, value: 1 },
  { letter: "U", count: 4, value: 1 },
  { letter: "V", count: 2, value: 4 },
  { letter: "W", count: 2, value: 4 },
  { letter: "X", count: 1, value: 8 },
  { letter: "Y", count: 2, value: 4 },
  { letter: "Z", count: 1, value: 10 },
];

export function getWords() {
  return words;
}

export function getFilteredWords(searchQuery) {
  var letters = searchQuery.split("");
  var validWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var temp = word.title.split("");

    for (var j = 0; j < letters.length; j++) {
      var letter = letters[j];
      temp = temp.filter((e) => e !== letter);

      if (temp.length === 0) {
        var wordObj = { ...word, score: 0 };

        for (var k = 0; k < word.title.split("").length; k++) {
          wordObj.score += scores.filter(
            (score) =>
              score.letter.toLocaleLowerCase() === word.title.split("")[k]
          )[0].count;
        }

        validWords.push(wordObj);
        break;
      }
    }
  }
  return validWords;
}
