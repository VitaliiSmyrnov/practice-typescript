import PropTypes from "prop-types";

import {
  Container,
  DescriptionWrapper,
  ImageWrapper,
} from "./MovieInfo.styled";

export const MovieInfo = ({ item = {} }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres = [],
  } = item;

  const movieGenres = genres.map((elem) => elem.name).join(", ");

  return (
    <Container>
      <ImageWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
      </DescriptionWrapper>
    </Container>
  );
};

MovieInfo.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
