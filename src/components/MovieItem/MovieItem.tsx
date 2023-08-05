import React from "react";

import { useLocation, Link } from "react-router-dom";
import { ImageWrapper, Title } from "./MovieItem.styled";

import NoPoster from "assets/no-poster.jpg";

interface IProps {
  item: {
    id: number,
    title: string,
    poster_path?: string
  }
}

export const MovieItem: React.FC<IProps> = ({ item = {} }) => {
  const location = useLocation();
  const {id, title, poster_path } = item;

  const poster =
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : NoPoster;

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <ImageWrapper>
          <img src={poster} alt={title} />
        </ImageWrapper>
        <Title>{title}</Title>
      </Link>
    </li>
  );
};


