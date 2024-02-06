import { useState } from "react";

function MovieInfo({ movie, onCloseMovie }) {
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

  function changeWishlist() {
    if (!localStorage.getItem("watchlist")) {
      localStorage.setItem(
        "watchlist",
        JSON.stringify([{ id: imdbID, movie }]),
      );
    } else {
      const existingLocalStorageWishlistCollection = JSON.parse(
        localStorage.getItem("watchlist"),
      );
      const newLocalStorageWishlistCollection = [
        ...existingLocalStorageWishlistCollection,
        { id: imdbID, movie: { ...movie } },
      ];
      localStorage.setItem(
        "watchlist",
        JSON.stringify(newLocalStorageWishlistCollection),
      );
    }
  }
  function changeWatchedlist() {
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", JSON.stringify([{ id: imdbID, movie }]));
    } else {
      const existingLocalStorageWishlistCollection = JSON.parse(
        localStorage.getItem("watched"),
      );

      const newLocalStorageWishlistCollection = [
        ...existingLocalStorageWishlistCollection,
        { id: imdbID, movie: { ...movie } },
      ];
      localStorage.setItem(
        "watched",
        JSON.stringify(newLocalStorageWishlistCollection),
      );
    }
  }

  return (
    <div className="rounded-lg">
      <div className="flex p-10">
        <img src={poster} alt="movie poster" className="w-60" />
        <div className="relative flex flex-col justify-between px-10">
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
          <button
            className="absolute right-[-2rem] top-[-2rem] rounded-full hover:bg-stone-500"
            onClick={() => onCloseMovie("")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" h-10 w-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <button
          className="mb-4 rounded-md bg-[#6741d9] px-4 py-2 text-xl"
          onClick={changeWatchedlist}
        >
          {false ? "REMOVE FROM WATCHED" : "ADD TO WATCH HISTORY"}
        </button>
        <button
          className="mb-4 rounded-md bg-[#6741d9] px-4 py-2 text-xl"
          onClick={changeWishlist}
        >
          {false ? "REMOVE FROM WATCHLIST" : "ADD TO WATCHLIST"}
        </button>
      </div>
    </div>
  );
}

export default MovieInfo;
