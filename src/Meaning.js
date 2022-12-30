import React, { useState, useEffect } from "react";
import Synonyms from "./Synonyms";
import Definition from "./Definition";

export default function Meaning(props) {
  const [meanings, setMeanings] = useState([]);
  const [synonyms, setSynonyms] = useState([]);

  useEffect(() => {
    setMeanings(props.meaning.definitions);
    setSynonyms(props.meaning.synonyms);
  }, [props.meaning]);

  return (
    <span className="Meaning">
      {props.selected && (
        <div className="meaning-content">
          <Definition meaning={meanings} />
          <Synonyms synonyms={synonyms} />
        </div>
      )}
    </span>
  );
}
