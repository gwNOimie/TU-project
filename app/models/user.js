var mongoose = require('mongoose');

var users = new mongoose.Schema({
    personalData: { type: mongoose.Schema.Types.ObjectId, ref: 'personalData' },
    otherData: { type: mongoose.Schema.Types.ObjectId, ref: 'otherData' }
});

var User = mongoose.model('user', users);

module.exports = {
    getItemById: (id) => {
		console.log('getItemById : ' + id);
		return new Promise((resolve, reject) => {			
			resolve(User.find({"_id": id}))
		})
	},
}