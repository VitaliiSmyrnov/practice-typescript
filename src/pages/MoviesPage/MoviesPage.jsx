import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ErrorMessage, MovieList, SearchBar } from "components";

import { movieApi } from "services/api";
import { Sort } from "utils";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");
  const [, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();

    (async () => {
      setStatus("pending");

      try {
        const data = await movieApi.fetchMovieSearch(query, controller.signal);

        setMovies(Sort.getSortedMovies(data));
        setStatus("resolved");
      } catch (error) {
        setError(error.message);
        setStatus("rejected");
      }
    })();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={(query) => setSearchParams({ query })} />

      {status === "pending" && (
        <div>Loading the list of searching movies...</div>
      )}

      {status === "resolved" && <MovieList items={movies} />}

      {status === "resolved" && movies.length === 0 && (
        <ErrorMessage text="Nothing found" />
      )}

      {status === "rejected" && (
        <ErrorMessage text="Oops, something went wrong! Please, try again." />
      )}
    </>
  );
};

export default MoviesPage;
