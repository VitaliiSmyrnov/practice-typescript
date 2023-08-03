import PropTypes from "prop-types";

export const ErrorMessage = ({ text, error }) => {
  return (
    <>
      {error && <p>{`Error message: ${error}`}</p>}
      {text && <p>{text}</p>}
    </>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
