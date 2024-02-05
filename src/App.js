import { useState } from "react";
import { useMovies } from "./useMovies";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);
  const [username, setUsername] = useState("");
  const isLoggedIn = Boolean(username);

  function handleMovieInput(e) {
    setQuery(e.target.value);
  }

  function handleLoginAndLogout(bool) {
    setUsername(bool);
  }

  return (
    <>
      <Header
        onMovieInput={handleMovieInput}
        onSetQuery={setQuery}
        moviesNum={movies.length}
        onLoginAndLogout={handleLoginAndLogout}
      />
      <Main
        movies={movies}
        isLoading={isLoading}
        error={error}
        isLoggedIn={isLoggedIn}
        user={username}
      />
    </>
  );
}

export default App;
