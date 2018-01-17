class IndexController {
  constructor(passport) {
    this.passport = passport;
  }

  index(req, res) {
    return null;
  }

  loginPage(req, res) {
    res.render('login'/*, { message: req.flash('error') || null }*/)
  }

  loginAction(req, res) {
    this.passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })   
  }

  auth(req, res) {
    return null;
  }

  register(req, res) {
    return null;
  }
}

module.exports = IndexController;