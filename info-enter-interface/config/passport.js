const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

function validPassword(password, real) {
  return real === password;
}
module.exports = function (passport) {
  passport.use(
    new LocalStrategy(function (username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          console.log("user not exists");
          return done(null, false, { message: "Username does not exist!" });
        }
        const isValid = validPassword(password, user.password);
        if (isValid) {
          console.log("Signed in");
          return done(null, user);
        } else {
          return done(null, false, { message: "Wrong password!" });
        }
      });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      if (err) {
        return done(err);
      }
      done(null, user);
    });
  });
};
