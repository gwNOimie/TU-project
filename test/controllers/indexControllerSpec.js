const expect = require('expect');
const IndexCtrl = require('../../app/controllers/indexController');

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

      // act
      const res = {
        render(name, param) {
          // assert
          expect(name).toBe('index');
        }
      }
    });
    it("Check correct redirection on auth error", () => {
      // arrange
      const passport = {
        authenticate() {
          req.session = {}
          req.session.user_tmp = {
            email: 'test@test',
            password: 'testPassword'
          }
          res.redirect('/login')
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
        render(name, param) {
          // assert
          expect(name).toBe('login');
          expect(this.flash).toBe(('error'));
        }
      }
    });
  });
});