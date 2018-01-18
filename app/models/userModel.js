const mongoose = require('mongoose');
var SHA256 = require("crypto-js/sha256");

mongoose.connect('mongodb://localhost:27017/tuProject', { useMongoClient: true });

var users = new mongoose.Schema({
  personalData: { type: mongoose.Schema.Types.ObjectId, ref: 'personalData' },
  otherData: { type: mongoose.Schema.Types.ObjectId, ref: 'otherData' }
});

var User = mongoose.model('user', users);

const log = s => console.log(s)

module.exports = {
  getItemByMail: (email) => {
    log('getItemByMail : ' + email);
    return new Promise((resolve, reject) => {
      User.find({ "personalData.email": email }, (error, results) => {
        if (error) {
          log(error);
          reject(error);
        }
        log(results);
        resolve(results);
      })
    })
  },
  addItem: (item) => {
    return new Promise((resolve, reject) => {
      log('addItem');
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
    log('checkLogin')
    return new Promise((resolve, reject) => {
      getItemByMail(email).then(user => {
        if (user.personalData.password == SHA256.encrypt(password, "IMIE")) {
          resolve(user)
        }
        else {
          reject("Invalid username or password")
        }
      }).catch(error => {
        reject(error);
      });

    })
  }
}