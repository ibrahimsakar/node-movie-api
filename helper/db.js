const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://ibrahim_movie:123456@ds115110.mlab.com:15110/movie-api');

    mongoose.connection.on('open', () => {
        console.log("MongoDB connected.");
    });

    mongoose.connection.on('error', (err) => {
        console.log("MongoDB error.", err);
    });

    mongoose.Promise = global.Promise;

};