class MovieList extends HTMLElement {
  async connectedCallback() {
    this.movies = JSON.parse(this.getAttribute('movies'));
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
