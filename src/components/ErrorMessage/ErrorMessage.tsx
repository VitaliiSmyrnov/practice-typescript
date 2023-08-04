import React from 'react';

interface IProps {
  text: string,
  error: string
}

export const ErrorMessage: React.FC<IProps> = ({ text, error }) => {
  return (
    <>
      {error && <p>{`Error message: ${error}`}</p>}
      {text && <p>{text}</p>}
    </>
  );
};
