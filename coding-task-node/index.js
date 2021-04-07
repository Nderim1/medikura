const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();
const cors = require("cors");

const home = require("./routes/home");
const scrabble = require("./routes/scrabble");

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get("env")}`);

app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(cors());
app.use("/api/scrabble", scrabble);

app.use("/", home);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan enabled...");
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
