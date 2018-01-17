var mongoose = require('mongoose');
var SHA256 = require("crypto-js/sha256");

var users = new mongoose.Schema({
  personalData: { type: mongoose.Schema.Types.ObjectId, ref: 'personalData' },
  otherData: { type: mongoose.Schema.Types.ObjectId, ref: 'otherData' }
});

var User = mongoose.model('user', users);

module.exports = {
  getItemByMail: (email) => {
    console.log('getItemByMail : ' + email);
    return new Promise((resolve, reject) => {
      resolve(User.find({ "personalData.email": email }))
    })
  },
  addItem: (item) => {
    return new Promise((resolve, reject) => {
      console.log('addItem');
      var user = new User(item);

      user.save(item, function (err, result) {
        if (err) {
          reject(err)
        };
        resolve(result)
      })

    })
  },
  checkLogin: (email, password) => {
    return new Promise((resolve, reject) => {
      var user = getItemByMail(email);
      if (user.personalData.password == SHA256.encrypt(password, "IMIE")) {
        resolve(user)
      }
      else {
        reject("Invalid username or password")
      }

    })
  }
}