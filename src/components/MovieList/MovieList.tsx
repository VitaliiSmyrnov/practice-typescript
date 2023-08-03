import PropTypes from "prop-types";

import { MovieItem } from "components";

import { List, Title } from "./MovieList.styled";

export const MovieList = ({ title, items = [] }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <List>
        {items?.map((item) => (
          <MovieItem key={item.id} item={item}></MovieItem>
        ))}
      </List>
    </>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
