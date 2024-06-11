const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

let userFavorites = {};

app.post("/api/favorites", (req, res) => {
  const { userId, movie } = req.body;
  console.log("POST /api/favorites", req.body);

  if (!userId || !movie) {
    return res.status(400).send("userId와 movie는 필수입니다.");
  }

  if (!userFavorites[userId]) {
    userFavorites[userId] = [];
  }

  const movieExists = userFavorites[userId].some(
    (favMovie) => favMovie.id === movie.id
  );

  console.log(movieExists);

  if (movieExists) {
    return res.status(400).send("이미 추가된 영화입니다.");
  }

  userFavorites[userId].push(movie);
  res.status(200).send(userFavorites[userId]);
});

app.get("/api/favorites/:userId", (req, res) => {
  const { userId } = req.params;

  console.log("GET /api/favorites/:userId", req.params);

  if (!userId) {
    return res.status(400).send("userId는 필수입니다.");
  }

  res.status(200).send(userFavorites[userId] || []);
});

app.delete("/api/favorites", (req, res) => {
  const { userId, movieId } = req.body;

  if (!userId || !movieId) {
    return res.status(400).send("userId와 movieId는 필수입니다.");
  }

  if (userFavorites[userId]) {
    userFavorites[userId] = userFavorites[userId].filter(
      (movie) => movie.id !== movieId
    );
  }

  res.status(200).send(userFavorites[userId]);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
