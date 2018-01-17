const path = require('path')
const express = require('express');
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const passport = require('passport')

const indexRouter = require('./routes/indexRouter');

// TWIG CONFIGURATION
app.set('views', `views`);
app.set('view engine', 'twig');

// This section is optional and can be used to configure twig.
app.set('twig options', {
  strict_variables: false
});
// END OF TWIG CONFIGURATION

// PASSPORT CONFIGURATION
app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
// END OF PASSPORT CONFIGURATION

// ROUTES CONFIGURATION
app.use('/', indexRouter);
// END OF ROUTES CONFIGURATION

// PUBLIC PATH CONFIG
app.use(express.static(path.join(__dirname, '../public')));
// END OF PUBLIC PATH CONFIG

app.listen(3000, () => console.log('Listening on port 3000!'));
