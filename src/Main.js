import { useState } from "react";
import Loader from "./Loader";
import SearchBox from "./SearchBox";

function Main({ movies, isLoading, error }) {
  const [movie, setMovie] = useState();

  return (
    <main className="flex gap-10 bg-stone-700 px-10 py-14 text-stone-50">
      <section className="w-1/2 rounded-lg bg-stone-600">
        <div>
          {isLoading && <Loader />}
          {!isLoading && !error && <SearchBox movies={movies} />}
          {/* {error && <ErrorMessage message={error} />} */}
        </div>
        <div>
          {/* <Movie />
          <MovieLists /> */}
        </div>
      </section>
      <section className=" w-full rounded-lg bg-stone-600"></section>
    </main>
  );
}

export default Main;
