import { Link } from "react-router-dom";
import { BiHomeHeart, BiSearch } from "react-icons/bi";

import PageNotFoundImage from "assets/icons/404_Error_with_cat.svg";

import { Container, ImageWrapper, LinkWrapper } from "./NotFound.styled";

export const NotFound = () => {
  return (
    <Container>
      <ImageWrapper>
        <PageNotFoundImage />
      </ImageWrapper>

      <LinkWrapper>
        <Link to="/">
          <BiHomeHeart />
          Back Home
        </Link>
        <Link to="/movies">
          <BiSearch />
          Search Movies
        </Link>
      </LinkWrapper>
    </Container>
  );
};
