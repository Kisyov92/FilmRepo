function MovieList({ movie, onChooseMovie, listName, onRemoveMovie }) {
  const {
    Poster: poster,
    Title: title,
    Released: released,
    Runtime: duration,
    Genre: genre,
    imdbRating: rating,
    Plot: plot,
    Actors: actors,
    Director: director,
    Writer: writer,
    imdbID,
  } = movie;

  return (
    <div
      className="flex w-1/2 rounded-lg px-5 py-10 hover:cursor-pointer hover:bg-stone-500"
      onClick={() => onChooseMovie(imdbID)}
    >
      <img src={poster} alt="movie poster" className="w-44" />
      <div className="flex justify-between px-10">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{genre}</p>
          <p>{released}</p>
          <p>{duration}</p>
          <p>
            IMDB rating: <span>⭐</span>
            {rating}
          </p>
          <button onClick={(e) => onRemoveMovie(e, listName, imdbID)}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
