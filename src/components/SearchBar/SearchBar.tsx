import PropTypes from "prop-types";
import { toast } from "react-toastify";

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.search.value.trim();

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

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
