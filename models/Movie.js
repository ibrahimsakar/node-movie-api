const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: [ true, '{PATH} is cannot be empty' ],
        maxlength: 100,
    },
    category: {
        type: String,
        maxlength: 15,
        minlength: 3,
    },
    country: {
        type: String,
        minlength: 1,
        maxlength: 50,
    },
    year: {
        type: Number,
        min: 1900,
        max: 2030,
    },
    imdb_score: {
        type: Number,
        min: 0,
        max: 10,
    },
    createdAt: {
        type: Date,
        'default': Date.now,
    },
});

module.exports = mongoose.model('movie', MovieSchema);
