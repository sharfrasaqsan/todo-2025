import React from "react";
import "./Content.css";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search items..."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
