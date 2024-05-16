require("dotenv").config(); // env파일을 사용할 수 있게 불러오기

const express = require("express");
const cookieParser = require("cookie-parser");
const connectWithDB = require("./config/db");
const cors = require("cors");
const cookieSession = require("cookie-session");
const cloudinary = require("cloudinary").v2;

const app = express();

connectWithDB(); // DB 연결

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json()); // express.json() 사용
app.use(cookieParser()); // cookie-parser 사용
app.use(
  cookieSession({
    // 세션을 위한 설정
    name: "session",
    maxAge: process.env.COOKIE_TIME * 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_SECRET], // 세션을 위한 비밀 키
    sameSite: "none", // 크로스오리진 요청 허용
  })
);
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use("/", require("./routes"));

app.listen(process.env.PORT || 8000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
