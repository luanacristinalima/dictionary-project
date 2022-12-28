import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <div className="SearchEngine">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word"
            onChange={handleKeywordChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}
