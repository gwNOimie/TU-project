class IndexController {
  constructor(passport) {
    this.passport = passport;
  }

  index(req, res) {
    return null;
  }

  login(req, res) {
    // this.passport.authenticate('local', {
    //   successRedirect: '/',
    //   failureRedirect: '/login',
    //   failureFlash: true
    // })
    res.render('login', { name: req.passport.name });
    //return null;
  }

  auth(req, res) {
    return null;
  }

  register(req, res) {
    return null;
  }
}

module.exports = IndexController;