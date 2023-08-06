import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ErrorMessage } from "src/components";

import { movieApi } from "src/services/api";
import { Sort } from "src/utils";

import { List } from "./Cast.styled";

import NoPhoto from "src/assets/no-photo.jpg";

interface CustomError {
  message: string
}

interface ICast {
  id: string, 
  profile_path: string | null, 
  original_name: string, 
  character: string
}

const Cast = () => {
  const [cast, setCast] = useState<ICast[]>([]);
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setStatus("pending");

      try {
        const data = await movieApi.fetchMovieCast(movieId, controller.signal);

        setCast(Sort.getSortedCast(data));
        setStatus("resolved");
      } catch (error: CustomError) {
        setError(error.message);
        setStatus("rejected");
      }
    })();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {status === "pending" && <p>Loading subpage...</p>}

      {status === "resolved" && cast.length !== 0 && (
        <List>
          {cast?.map(({ id, profile_path, original_name, character }) => {
            const photo =
              profile_path !== null
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : NoPhoto;

            return (
              <li key={id}>
                <img src={photo} alt={original_name} />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </List>
      )}

      {status === "resolved" && cast.length === 0 && (
        <ErrorMessage text="We don't have any cast for this movie" />
      )}

      {status === "rejected" && (
        <ErrorMessage error={error} text="Sorry, something wrong. Try again." />
      )}
    </>
  );
};

export default Cast;
