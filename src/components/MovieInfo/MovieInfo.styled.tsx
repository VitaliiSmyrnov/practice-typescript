import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  padding-bottom: 5px;

  border-bottom: 1px solid #383838;
`;

export const ImageWrapper = styled.div`
  flex: 0 0 200px;
  border-radius: 4px;
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`;

export const DescriptionWrapper = styled.div`
  text-align: left;
  flex: 1 1 auto;

  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;
