import { useEffect, useState } from "react";
import Loader from "./Loader";
import SearchBox from "./SearchBox";
import MovieInfo from "./MovieInfo";
import ErrorMessage from "./ErrorMessage";

const KEY = "7f1f26fa";

function Main({ movies, isLoading, error }) {
  const [movieID, setMovieID] = useState("");
  const [movie, setMovie] = useState({});
  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [errorMovie, setErrorMovie] = useState("");

  function handleChooseMovie(id) {
    setMovieID(id);
  }

  useEffect(() => {
    async function fetchMovie() {
      // const res = await fetch(
      //   `http://www.omdbapi.com/?apikey=${KEY}&i=${movieID}`,
      // );
      // const data = await res.json();
      // setMovie(data);

      if (!movieID) return;

      try {
        setErrorMovie(false);
        setIsLoadingMovie(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${movieID}`,
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movie");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovie(data);
      } catch (err) {
        setErrorMovie(err.message);
      } finally {
        setIsLoadingMovie(false);
      }
    }

    fetchMovie();
  }, [movieID]);

  const noMovies = movies?.length === 0;

  return (
    <main className="flex gap-10 bg-stone-700 px-10 py-14 text-stone-50">
      <section className="scrollbar max-h-[600px] min-h-fit w-1/2 overflow-y-scroll   rounded-lg bg-stone-600">
        <div>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <SearchBox onChooseMovie={handleChooseMovie} movies={movies} />
          )}
          {error && <ErrorMessage message={error} />}
          {noMovies && !isLoading && !error && (
            <p className="py-10 text-center text-4xl">No movies to show!</p>
          )}
        </div>
      </section>
      <section className="h-fit w-full rounded-lg bg-stone-600">
        {!isLoadingMovie && !errorMovie && movie.Title && (
          <MovieInfo movie={movie} />
        )}
        {isLoadingMovie && <Loader />}
        {errorMovie && <ErrorMessage message={errorMovie} />}
      </section>
    </main>
  );
}

export default Main;
