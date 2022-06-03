import React from "react";
import { useState } from "react";

import "../styles/shoppingForm.styles.css";

const ShoppingForm = ({ addItem, searchItem }) => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addItem(value);
    setValue("");
  };

  const handleSearchSubmit = (error) => {
    error.preventDefault();
    if (!search) {
      return;
    }
    searchItem(search);
    setSearch("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Add item to list"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <br />
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Search item"
          value={search}
          onChange={(error) => setSearch(error.target.value)}
        />
      </form>
    </>
  );
};

export default ShoppingForm;
