import SearchBoxMovie from "./SearchBoxMovie";

function SearchBox({ movies, onChooseMovie }) {
  return movies.map((movie, i) => (
    <SearchBoxMovie
      key={movie.imdbID}
      movie={movie}
      onChooseMovie={onChooseMovie}
    />
  ));
}

export default SearchBox;
