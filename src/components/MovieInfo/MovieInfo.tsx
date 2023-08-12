import React from "react";

import {
  Container,
  DescriptionWrapper,
  ImageWrapper,
} from "./MovieInfo.styled";

import { IMovie } from "src/models/IMovie";

interface IProps {
  item: IMovie
}

export const MovieInfo: React.FC<IProps> = ({ item = {} }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = item;
  // console.log('item', item)

  const movieGenres = genres?.map((elem) => elem.name).join(", ");
  const vote = vote_average && (vote_average * 10).toFixed(0);

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
          {title} ({release_date?.slice(0, 4)})
        </h2>
        <p>User Score: {vote}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
      </DescriptionWrapper>
    </Container>
  );
};

