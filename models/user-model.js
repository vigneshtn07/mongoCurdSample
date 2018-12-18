const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const UserSchema = mongoose.Schema({
    name: {type: String},
    jobTitle: {type: String},
    avatar: {type: String},
    workPlace: {type: String},
    _id: { type: ObjectId, auto: true }
});

module.exports = mongoose.model('user-collection', UserSchema);
