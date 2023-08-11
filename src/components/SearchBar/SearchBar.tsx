import React from 'react';

import { toast } from "react-toastify";

interface IProps {
  onSubmit: (arg: string) => void
}

export const SearchBar: React.FC<IProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const queryElement = form.elements.namedItem('search') as HTMLInputElement;
    const query = queryElement.value.trim();

    if (!query) {
      return toast.error("enter the name");
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};

