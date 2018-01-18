var mongoose = require('mongoose');
var SHA256 = require("crypto-js/sha256");

var users = new mongoose.Schema({
<<<<<<< HEAD
    personalData: { type: mongoose.Schema.Types.ObjectId, ref: 'personalData' },
    otherData: { type: mongoose.Schema.Types.ObjectId, ref: 'otherData' }
=======
  personalData: { type: mongoose.Schema.Types.ObjectId, ref: 'personalData' },
  otherData: { type: mongoose.Schema.Types.ObjectId, ref: 'otherData' }
>>>>>>> c266ea9e853078e5bb5598c1bddef44d24c423f4
});

var User = mongoose.model('user', users);

module.exports = {
<<<<<<< HEAD
    getItemById: (id) => {
		console.log('getItemById : ' + id);
		return new Promise((resolve, reject) => {			
			resolve(User.find({"_id": id}))
		})
	},
    getItemByMail: (email) => {
		console.log('getItemByMail : ' + email);
		return new Promise((resolve, reject) => {			
			resolve(User.find({"personalData.email": email}))
		})
    },
    addItem: (item) => {
		return new Promise((resolve, reject) => {
            console.log('addItem');
            var user = new User(item);
            
			user.save(item, function(err, result) {
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
    },
    updateItem: (id, item) => {
		return new Promise((resolve, reject) => {
			User.findByIdAndUpdate(id, item, function(err, result) {
				if (err) {
					reject(err)
				};
				resolve(result)})

	
		})
	},
	deleteItem: (id) => {
		return new Promise((resolve, reject) => {
			resolve(User.find({"personalData.email": id}).remove().exec())
		})
	}
=======
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
>>>>>>> c266ea9e853078e5bb5598c1bddef44d24c423f4
}