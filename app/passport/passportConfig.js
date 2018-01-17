const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/userModel');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, password, callback) => {
    UserModel.checkLogin(email, password).then(user => {
      return callback(null, user);
    }).catch(error => {
      return callback(null, false, { message: error });
    });
    // , (err, user) => {
    //   if (err) {
    //     return callback(err);
    //   }
    //   if (!user) {
    //     return callback(null, false, { message: 'Incorrect email.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return callback(null, false, { message: 'Incorrect password.' });
    //   }
    //   return callback(null, user);
    // });
  }
));

module.exports = passport;