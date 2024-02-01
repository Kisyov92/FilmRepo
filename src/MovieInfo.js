function MovieInfo({ movie }) {
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
  } = movie;

  return (
    <div className="flex p-10">
      <img src={poster} alt="movie poster" className="w-60" />
      <div className="flex flex-col justify-between px-10">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p>Released on {released}</p>
        <p>Film duration: {duration}</p>
        <p>Genre: {genre}</p>
        <p>
          IMDB rating: <span>⭐</span>
          {rating}
        </p>
        <p className="py-5">{plot}</p>
        <p>Director: {director}</p>
        <p>Writers: {writer}</p>
        <p>Stars: {actors}</p>
      </div>
    </div>
  );
}

export default MovieInfo;
