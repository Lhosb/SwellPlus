import React from "react";
import { Form, FormControl } from "react-bootstrap";

const Search = ({ setShowResults, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setShowResults(true);
  };
  return (
    <Form inline className="ml-auto">
      <FormControl
        className="seach-bar"
        type="text"
        onChange={handleChange}
        placeholder="Search Spots"
      />
    </Form>
  );
};

export default Search;
