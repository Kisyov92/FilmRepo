import { useEffect, useState } from "react";
import Loader from "./Loader";
import SearchBox from "./SearchBox";

const KEY = "7f1f26fa";

function Main({ movies, isLoading, error }) {
  const [movieID, setMovieID] = useState("");
  const [movie, setMovie] = useState({});
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

  function handleChooseMovie(id) {
    setMovieID(id);
  }

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${movieID}`,
      );
      const data = await res.json();
      setMovie(data);
    }
    fetchMovie();
  }, [movieID]);

  return (
    <main className="flex gap-10 bg-stone-700 px-10 py-14 text-stone-50">
      <section className="scrollbar h-[600px] w-1/2 overflow-y-scroll  rounded-lg bg-stone-600">
        <div>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <SearchBox onChooseMovie={handleChooseMovie} movies={movies} />
          )}
          {/* {error && <ErrorMessage message={error} />} */}
        </div>
      </section>
      <section className=" w-full rounded-lg bg-stone-600">
        <div className="flex p-10">
          <img src={poster} alt="movie poster" className="w-60" />
          <div className="flex flex-col justify-between px-10 pt-5">
            <h3 className="text-4xl font-bold">{title}</h3>
            <p>Released on {released}</p>
            <p>Film duration: {duration}</p>
            <p>Genre: {genre}</p>
            <p>
              IMDB rating: <span>⭐</span>
              {rating}
            </p>
            <p>{plot}</p>
            <p>Director: {director}</p>
            <p>Writers: {writer}</p>
            <p>Stars: {actors}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
