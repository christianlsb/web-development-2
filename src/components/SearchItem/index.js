import React, { useEffect, useState } from "react";

export function SearchBar({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, items]);

  return (
    <>
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleChange}
      />
    </>
  );
}
