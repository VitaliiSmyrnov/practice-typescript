import React, {ReactNode} from "react";

import { HiArrowSmLeft } from "react-icons/hi";

import { LinkGoBack } from "./BackLink.styled";

interface IProps {
  to: {pathname: string},
  children: ReactNode
}

export const BackLink: React.FC<IProps> = ({ to, children }) => {
  return (
    <LinkGoBack to={to}>
      <HiArrowSmLeft />
      {children}
    </LinkGoBack>
  );
};

