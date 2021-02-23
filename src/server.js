const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', async (request, response) => {
  const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4a6eac5979a646031dc1c7a3cd7a2697&language=en-us&page=1');
  const moviesResponseJson = await moviesResponse.json();
  const movies = moviesResponseJson.results;
  response.render('index', { movies })
});

app.listen(3000, () => {
  console.log('Server running in http://localhost:3000');
});
