import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 200px;

  border-radius: 4px;
  overflow: hidden;

  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.p`
  width: 200px;
  font-weight: 500;
`;
