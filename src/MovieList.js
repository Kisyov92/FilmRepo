function MovieList({
  movie,
  onChooseMovie,
  listName,
  onRemoveMovie,
  onMoveToOtherList,
}) {
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
      className="flex w-1/2 gap-5 rounded-lg px-5 py-10 hover:cursor-pointer hover:bg-stone-500"
      onClick={() => onChooseMovie(imdbID)}
    >
      <img src={poster} alt="movie poster" className="w-44" />
      <div className="flex w-full flex-col gap-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{genre}</p>
        <p>{released}</p>
        <p>{duration}</p>
        <p>
          IMDB rating: <span>⭐</span>
          {rating}
        </p>
        <button
          className="mt-auto w-fit rounded-md bg-[#6741d9] px-4 py-2 text-base"
          onClick={(e) => onMoveToOtherList(e, listName, imdbID)}
        >
          {listName === "watched" ? "WATCH AGAIN" : "ADD TO WATCH HISTORY"}
        </button>
        <button
          className=" w-fit rounded-md bg-[#6741d9] px-4 py-2 text-base"
          onClick={(e) => onRemoveMovie(e, listName, imdbID)}
        >
          DELETE FROM LIST
        </button>
      </div>
    </div>
  );
}

export default MovieList;
