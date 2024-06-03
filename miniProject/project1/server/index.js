const express = require("express");
const app = express();
const port = 3001;
const path = require("path");

// JSON 파일 경로
const movieListDataPath = path.join(__dirname, "../data/movieListData.json");
const movieDetailDataPath = path.join(
  __dirname,
  "../data/movieDetailData.json"
);

const cors = require("cors");
app.use(cors());

// JSON 파일을 읽어서 API로 제공
app.get("/api/movies", (req, res) => {
  res.sendFile(movieListDataPath);
});

app.get("/api/movie-details", (req, res) => {
  res.sendFile(movieDetailDataPath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
