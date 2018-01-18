const path = require('path')
const express = require('express');
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("./passport/passportConfig");
const app = express();
const passport = require('passport');

const indexRouter = require('./routes/indexRouter');

// TWIG CONFIGURATION
app.set('views', `views`);
app.set('view engine', 'twig');

// This section is optional and can be used to configure twig.
app.set('twig options', {
  strict_variables: false
});
// END OF TWIG CONFIGURATION

// PUBLIC PATH CONFIG
app.use(express.static(path.join(__dirname, '../public')));
// END OF PUBLIC PATH CONFIG

// PASSPORT CONFIGURATION
// app.use(express.static("public"));
app.use(session({
  secret: "cats",
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
require('./passport/passportConfig')(passport);
// END OF PASSPORT CONFIGURATION


// ROUTES CONFIGURATION
app.use('/', indexRouter);
// END OF ROUTES CONFIGURATION

app.listen(3000, () => console.log('Listening on port 3000!'));
