class MovieList extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4a6eac5979a646031dc1c7a3cd7a2697&language=en-us&page=1');
    const responseJson = await response.json();
    this.movies = responseJson.results;
  }

  set movies(value) {
    this._movies = value;
    this.render();
  }

  render() {
    const { _movies } = this;
    const containerElement = document.createElement('div');
    containerElement.classList.add('movie__list');

    _movies.forEach(({ title, backdrop_path, overview }) => {
      containerElement.innerHTML += `
        <div class="movie__item">
            <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${title}">
            <h2>${title}</h2>
            <p>${overview}</p>
        </div>
      `;
    });

    this.appendChild(containerElement);
  }
}

customElements.define('movie-list', MovieList);
