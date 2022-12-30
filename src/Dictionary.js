import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Gallery from "./Gallery";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const apiKey = "563492ad6f91700001000001e2d3ec0dfa4643acbfa6df2c80c62dd4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handlePexelsResponse);
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

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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
        <h2 className="mt-3 container">Gallery</h2>
        <Gallery photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
