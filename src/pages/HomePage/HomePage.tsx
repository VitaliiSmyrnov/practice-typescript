import { useState, useEffect } from "react";

import { MovieList } from "components";

import { movieApi } from "services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");
  const [, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setStatus("pending");

      try {
        const data = await movieApi.fetchTrendingMovies(controller.signal);

        setMovies(data.results);
        setStatus("resolved");
      } catch (error) {
        setError(error.message);
        setStatus("rejected");
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {status === "pending" && (
        <div>Loading the list of trending movies...</div>
      )}

      {status === "resolved" && (
        <MovieList title="Trending today" items={movies} />
      )}

      {status === "rejected" && (
        <div>Oops, something went wrong! Please, try again.</div>
      )}
    </>
  );
};

export default HomePage;
