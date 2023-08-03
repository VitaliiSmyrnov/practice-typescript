import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { movieApi } from "services/api";
import { ErrorMessage } from "components";
import { List } from "./Reviews.styled";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setStatus("pending");

        const data = await movieApi.fetchMovieReviews(
          movieId,
          controller.signal
        );


        setReviews(data);
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

  return (
    <>
      {status === "pending" && <p>Loading subpage...</p>}

      {status === "resolved" && reviews.length !== 0 && (
        <List>
          {reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </List>
      )}

      {status === "resolved" && reviews.length === 0 && (
        <ErrorMessage text="We don't have any reviews for this movie" />
      )}

      {status === "rejected" && (
        <ErrorMessage error={error} text="Sorry, something wrong. Try again." />
      )}
    </>
  );
};

export default Reviews;
