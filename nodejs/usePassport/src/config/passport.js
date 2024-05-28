const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/users.model");

// req.login(user)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// cilent => session => req
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    (email, password, done) => {
      User.findOne(
        {
          email: email.toLocaleLowerCase(),
        },
        (err, user) => {
          if (err) return done(err);

          if (!user) {
            return done(null, false, { message: "Incorrect email." });
          }

          user.comparePassword(password, (err, isMatch) => {
            if (err) return done(err);

            if (!isMatch) {
              return done(null, false, { message: "Incorrect password." });
            }

            return done(null, user);
          });
        }
      );
    }
  )
);
