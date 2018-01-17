const expect = require('expect');
const IndexController = require('../../app/controllers/indexController');

describe("indexController", () => {
  describe("#login", () => {
    it("Check correct redirection on auth success", () => {
      // arrange
      const passport = {
        authenticate() {
          req.session = {}
          req.session.user_tmp = {
            email: 'test@test.test',
            password: 'testPassword'
          }
          res.redirect('/')
        }
      }
      const req = {
        body: {
          email: 'test@test.test',
          password: 'testPassword'
        }
      }
      const res = {
        render(viewName, param) {
          // assert
          console.log(viewName, param)
          expect(viewName).toBe('index');
        }
      }
      const indexController = new IndexController(passport);

      // act
      indexController.index(req, res);
    });
    it("Check correct redirection on auth error", () => {
      // arrange
      const passport = {
        authenticate() {
          req.session = {}
          req.session.user_tmp = {
            email: 'test@test.test',
            password: 'testPassword'
          }
          res.redirect('/plop')
        }
      }
      const req = {
        body: {
          email: 'test@test.test',
          password: 'testPassword'
        }
      }

      // act
      const res = {
        render(viewName, param) {
          // assert
          expect(viewName).toBe('login');
          expect(this.flash).toBe(('error'));
        }
      }
      const indexController = new IndexController(passport);

      // act
      indexController.index(req, res);
    });
  });
});