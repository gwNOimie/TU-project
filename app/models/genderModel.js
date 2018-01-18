var mongoose = require('mongoose');

var gender = new mongoose.Schema ({
    type: { type: String },
    icon: { type: String }
});

var Gender = mongoose.model('gender', gender);