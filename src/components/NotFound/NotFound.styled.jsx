import styled from "styled-components";

export const Container = styled.div``;

export const ImageWrapper = styled.div`
  text-align: center;

  svg {
    width: 350px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 8px 16px;
    border: 1px solid #383838;
    border-radius: 4px;

    &:hover,
    &:focus {
      color: white;
      background-color: orangered;
    }
  }
`;
