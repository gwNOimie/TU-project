var mongoose = require('mongoose');

var personalData = new mongoose.Schema ({
    nickname: { type: String },
    firstname: { type: String },
    lastname:{ type: String },
    email: { type: String },
    birthdate: { type: Date },
    gender: { type: mongoose.Schema.Types.ObjectId, ref: 'gender' }
});

var PersonalData = mongoose.model('personalData', personalData);