const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const User = require("./models/users.model");
const passport = require("passport");
const cookieSession = require("cookie-session");

const app = express();
const port = 4000;

const cookieEncryptionKey = "secure-encryption-key";

app.use(
  cookieSession({
    keys: [cookieEncryptionKey],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://####cluster0.vsbnr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.json({ message: info });

    req.logIn(user, (err) => {
      if (err) return next(err);

      return res.redirect("/");
    });
  })(req, res, next);
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res, next) => {
  const user = new User(req.body);

  try {
    await user.save();
    console.log("회원가입 성공");
    // 여기를 수정
    return res.json({ success: true, message: "회원가입 성공" }); // 클라이언트에 성공 응답 보내기
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "회원가입 중 오류가 발생했습니다." });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
