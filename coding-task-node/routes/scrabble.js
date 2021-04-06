const { v4: uuidv4 } = require("uuid");
const axios = require("axios").default;
const express = require("express");
const router = express.Router();

const words = require("../public/words.json");
const scores = require("../public/scores.json");

const findValidWords = async (letters) => {
  var validWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var temp = word.split("");

    for (var j = 0; j < letters.length; j++) {
      var letter = letters[j];
      temp = temp.filter((e) => e != letter);

      if (temp.length == 0) {
        var wordObj = { _id: uuidv4(), title: word, score: 0 };

        for (var k = 0; k < word.split("").length; k++) {
          wordObj.score += scores.filter(
            (score) => score.letter.toLocaleLowerCase() == word.split("")[k]
          )[0].count;
        }

        validWords.push(wordObj);

        break;
      }
    }
  }
  return validWords;
};

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/:letters", (req, res) => {
  findValidWords(req.params.letters.split("")).then((e) => {
    return res.send(e);
  });
});

router.get("/description/:word", (req, res) => {
  return axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
    .then((e) => {
      return res.send(e.data[0].meanings[0].definitions[0].definition);
    })
    .catch((e) => {
      return "No Definitions Found";
    });
});

module.exports = router;
