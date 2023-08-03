import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";
import { ImageWrapper, Title } from "./MovieItem.styled";

import NoPoster from "assets/no-poster.jpg";

export const MovieItem = ({ item = {} }) => {
  const location = useLocation();

  const poster =
    item.poster_path !== null
      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      : NoPoster;

  return (
    <li>
      <Link to={`/movies/${item.id}`} state={{ from: location }}>
        <ImageWrapper>
          <img src={poster} alt={item.title} />
        </ImageWrapper>
        <Title>{item.title}</Title>
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};
