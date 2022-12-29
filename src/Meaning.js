import React, { useState, useEffect } from "react";
import Synonyms from "./Synonyms";
import Definition from "./Definition";

export default function Meaning(props) {
  const [meanings, setMeanings] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (props.trigger !== props.index) {
      setIsShown(false);
    }
  }, [props.trigger, props.index]);

  function showMeanings(message) {
    setMeanings(message);
  }
  function showSynonyms(message) {
    setSynonyms(message);
  }
  function handleClick() {
    props.handleOpen();
    setIsShown(!isShown);
  }

  return (
    <span className="Meaning">
      <button
        className="btn btn-primary meaning-button"
        onClick={() => {
          showMeanings(props.meaning.definitions);
          showSynonyms(props.meaning.synonyms);
          handleClick();
        }}
      >
        {props.meaning.partOfSpeech}
      </button>

      {isShown && (
        <div>
          <Definition meaning={meanings} />
          <Synonyms synonyms={synonyms} />
        </div>
      )}
    </span>
  );
}
