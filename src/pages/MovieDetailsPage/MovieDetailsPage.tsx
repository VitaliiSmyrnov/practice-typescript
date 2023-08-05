import { Suspense, useState, useEffect, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";

import { BackLink, MovieInfo } from "src/components";
import { movieApi } from "src/services/api";

import { AdditionalWrapper } from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState("idle");
  const [, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  const { current: backLinkHref } = useRef(
    location.state?.from ?? { pathname: "/" }
  );

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setStatus("pending");

      try {
        const data = await movieApi.fetchMovieDetail(
          Number(movieId),
          controller.signal
        );

        setMovie(data);
        setStatus("resolved");
      } catch (error) {
        setError(error.message);
        setStatus("rejected");
      }
    })();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  const isEmpty = Object.keys(movie).length === 0;

  return (
    <>
      {status === "resolved" && !isEmpty && (
        <>
          <BackLink to={backLinkHref}>Go back</BackLink>

          <MovieInfo item={movie} />

          <AdditionalWrapper>
            <p>Aditional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </AdditionalWrapper>
        </>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
