import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
              className="SearchEngine"
            />
          </form>
        </div>
        <Results data={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
