const expect = require('expect');
const IndexController = require('../../app/controllers/indexController');

describe("indexController", () => {
  describe("#login", () => {
    beforeEach(() => { })
    it("Check correct redirection on auth success", () => {
      // arrange
      const passport = {
        authenticate() {
          req.session = {}
          req.session.user_tmp = {
            email: 'test@test.test',
            password: 'testPassword'
          }
          res.render('index');
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
          expect(viewName).toBe('index');
        }
      }
      const indexController = new IndexController(passport);

      // act
      indexController.loginAction(req, res);
    });
    it("Check correct redirection on auth error", () => {
      // arrange
      const passport = {
        authenticate() {
          // (+set flash message ?)
          res.render('login', { message: 'error' });
        }
      }
      const req = {
        body: {
          email: 'test@test.test',
          password: 'testPassword'
        }
      }

      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('login');
          expect(params).toEqual({ message: 'error' });
        }
      }
      const indexController = new IndexController(passport);

      // act
      indexController.loginAction(req, res);
    });
  });
});