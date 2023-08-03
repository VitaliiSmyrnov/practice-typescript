import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 8px 0;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;

  font-weight: 500;
  text-decoration: none;
  border-radius: 4px;

  color: black;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
