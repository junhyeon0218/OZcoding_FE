const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 4000;
const secretText = "privateKey";

const posts = [
  {
    username: "jane",
    title: "post 1",
  },
  {
    username: "kan",
    title: "post 2",
  },
];
const refreshTokens = [];

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("h1");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  // create token - payload + secretText
  const accessToken = jwt.sign(user, secretText, { expiresIn: "20s" });
  const refreshToken = jwt.sign(user, secretText, { expiresIn: "1d" });

  refreshTokens.push(refreshToken);

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({ accessToken: accessToken });
});

app.get("/posts", middleware, (req, res) => {
  res.json(posts);
});

function middleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretText, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get("/refresh", (req, res) => {
  const cookies = req.cookies; // 서버에서 쿠키 받아올 때는 req요청 안에 cookies라는 속성이 있음
  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, secretText, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign({ name: user.name }, secretText, {
      expiresIn: "20s",
    });
    res.json({ accessToken: accessToken });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
