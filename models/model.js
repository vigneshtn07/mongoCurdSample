const mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const GalleryListSchema = mongoose.Schema({
    imageName: {type: String},
    imageLink: {type: String},
    imageDescription: {type: String},
    _id: { type: ObjectId, auto: true }
});

module.exports = mongoose.model('gallery-collection', GalleryListSchema);
