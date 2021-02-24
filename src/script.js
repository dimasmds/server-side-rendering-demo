(async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4a6eac5979a646031dc1c7a3cd7a2697&language=en-us&page=1');
  const responseJson = await response.json();
  const movies = responseJson.results;

  const moviesElements = document.querySelector('#movies');
  movies.forEach(({ title, backdrop_path, overview }) => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie__item');
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${title}">
      <h2>${title}</h2>
      <p>${overview}</p>
    `;
    moviesElements.appendChild(movieElement);
  });
})();
