import { useState } from "react";

import { useMovies } from "./useMovies";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);

  function handleMovieInput(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <Header
        onMovieInput={handleMovieInput}
        onSetQuery={setQuery}
        moviesNum={movies.length}
      />
      <Main movies={movies} isLoading={isLoading} error={error} />
    </>
  );
}

export default App;
