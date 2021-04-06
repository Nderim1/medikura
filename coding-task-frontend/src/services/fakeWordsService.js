export const words = [
  { _id: "1", title: "aa" },
  { _id: "2", title: "aah" },
  { _id: "3", title: "aahed" },
  { _id: "4", title: "aahing" },
  { _id: "5", title: "aahs" },
  { _id: "6", title: "aal" },
  { _id: "7", title: "aalii" },
  { _id: "8", title: "aaliis" },
  { _id: "9", title: "aals" },
  { _id: "10", title: "aardvark" },
  { _id: "11", title: "aardvarks" },
  { _id: "12", title: "aardwolf" },
  { _id: "13", title: "aardwolves" },
  { _id: "14", title: "aargh" },
  { _id: "15", title: "aarrgh" },
  { _id: "16", title: "aarrghh" },
  { _id: "17", title: "aas" },
  { _id: "18", title: "aasvogel" },
  { _id: "19", title: "aasvogels" },
  { _id: "20", title: "ab" },
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
  var searchLetters = searchQuery.split("");
  var validWords = [];

  for (var i = 0; i < words.length; i++) {
    var temp = words[i].title.split("");

    for (var j = 0; j < searchLetters.length; j++) {
      temp = temp.filter((e) => e !== searchLetters[j]);

      if (temp.length === 0) {
        validWords.push(words[i]);
        break;
      }
    }
  }

  return validWords;
}
