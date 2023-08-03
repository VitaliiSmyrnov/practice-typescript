import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkGoBack = styled(Link)`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;

  margin-top: 10px;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    color: orangered;
  }
`;
