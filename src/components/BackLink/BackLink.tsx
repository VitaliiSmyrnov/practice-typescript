import PropTypes from "prop-types";
import { HiArrowSmLeft } from "react-icons/hi";

import { LinkGoBack } from "./BackLink.styled";

export const BackLink = ({ to, children }) => {
  return (
    <LinkGoBack to={to}>
      <HiArrowSmLeft />
      {children}
    </LinkGoBack>
  );
};

BackLink.propTypes = {
  to: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
};
