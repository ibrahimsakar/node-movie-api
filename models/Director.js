const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 60
    },
    surname: {
        type: String,
        minlength: 2,
        maxlength: 60
    },
    bio: {
        type: String,
        minlength: 10,
        maxlength: 1000
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('director', DirectorSchema);