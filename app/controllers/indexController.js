class IndexController {
  constructor(passport) {
    this.passport = passport;
  }

  index(req, res) {
    res.render('index');
  }

  loginPage(req, res) {
    console.log('loginPage')
    res.render('login'/*, { message: req.flash('error') || null }*/)
  }

  loginAction(req, res) {
    console.log(this.passport)
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

  logout(req, res) {
    return null;
  }
}

module.exports = IndexController;