const expect = require('expect');
const User = require('../../app/model/user');

describe("User", () => {
    it("Check find one user ", () => {

    })
    it("Check add user", () => {

    })
    it("Check login", () => {
        var User = new User();

        User.personalData.email = "test@example.fr";
        User.personalData.password = SHA256.encrypt("password", "IMIE");

        const req = {
            email = "test@example.fr",
            password = SHA256.encrypt("password", "IMIE")
        }


    })
})