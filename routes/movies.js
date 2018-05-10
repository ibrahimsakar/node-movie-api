const express = require('express');
const router = express.Router();

//Models
const Movie = require('../models/Movie');

//Routing
router.get('/', (req, res) => {
  const promise = Movie.find({ });
  promise.then((data) => {
    res.json(data);
  }).catch((err) =>{
    res.json(err);
  })
});

router.get('/:movie_id', (req, res) => {
  const promise = Movie.findById(req.params.movie_id);

  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  })
});

router.post('/', (req, res, next) => {
  const { title, category, country, year, imdb_score } = req.body;
  
  const movie = new Movie({
    title: title,
    category: category,
    country: country,
    year: year,
    imdb_score: imdb_score
  });
  
  const promise = movie.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });

});

module.exports = router;
