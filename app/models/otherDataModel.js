var mongoose = require('mongoose');

var otherData = new mongoose.Schema ({
    picture: { type: String },
    presentation: { type: String }
});

var OtherData = mongoose.model('otherData', otherData);