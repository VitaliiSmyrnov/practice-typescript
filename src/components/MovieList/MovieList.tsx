import React from 'react';

import { MovieItem } from "src/components";

import { List, Title } from "./MovieList.styled";

interface IItem {
  id: number,
  title: string,
  poster_path: string
}

interface IProps {
  title: string,
  items?: IItem[]
}

export const MovieList: React.FC<IProps> = ({ title, items = [] }) => {
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

