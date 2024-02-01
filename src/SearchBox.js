import SearchBoxMovie from "./SearchBoxMovie";

const moviess = [
  {
    Title: "Rocky",
    Year: "1976",
    imdbID: "tt0075148",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTBkMjg2Mj…GU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  },
  {
    Title: "Rocky Balboa",
    Year: "2006",
    imdbID: "tt0479143",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWIyNmQyNj…2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Rocky II",
    Year: "1979",
    imdbID: "tt0079817",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjk2Y2FiYW…GYxYWJmXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  },
  {
    Title: "Rocky IV",
    Year: "1985",
    imdbID: "tt0089927",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQ0NmIyNz…zYxOTA1XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
  },
  {
    Title: "Rocky III",
    Year: "1982",
    imdbID: "tt0084602",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDJiMzQ4YT…zkwNWVmXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
  },
  {
    Title: "The Rocky Horror Picture Show",
    Year: "1975",
    imdbID: "tt0073629",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGIzYjM3Yz…DNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_SX300.jpg",
  },
  {
    Title: "Rocky V",
    Year: "1990",
    imdbID: "tt0100507",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM2Mzc4MTYxM15BMl5BanBnXkFtZTcwODY5NTk1NA@@._V1_SX300.jpg",
  },
  {
    Title: "Rocky Aur Rani Kii Prem Kahaani",
    Year: "2023",
    imdbID: "tt14993250",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2FlZTE5Zj…jIwN2IzXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg",
  },
  {
    Title: "The Adventures of Rocky & Bullwinkle",
    Year: "2000",
    imdbID: "tt0131704",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWNiYmIwNj…TQxYmMzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
  },
  {
    Title: "Rocky Handsome",
    Year: "2016",
    imdbID: "tt3410408",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGRkNDA0Mz…WM2YTBkXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg",
  },
];

function SearchBox({ movies }) {
  return movies.map((movie) => (
    <SearchBoxMovie key={movie.imdbId} movie={movie} />
  ));
}

export default SearchBox;
