const express = require("express");

const server = express();
const wordle = "label";

server.get("/guess/:word", (req, res) => {
  const userGuess = req.params.word;
  let result = [];
  for (let i = 0; i < userGuess.length; i++) {
    let ch = userGuess[i];
    if (wordle[i] == ch) {
      result.push("rgb(50, 248, 0)");
    } else if (wordle.includes(ch)) {
      result.push("rgb(232, 248, 0)");
    } else {
      result.push("rgb(34, 34, 34)");
    }
  }
  res.json(result);
});

server.use(express.static("public"));

server.listen(3000, () => {
  console.log("server is work :)");
});
