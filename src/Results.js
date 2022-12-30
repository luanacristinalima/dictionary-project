import React, { useState } from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  const [trigger, setTrigger] = useState(0);
  const [buttonSelected, setButtonSelected] = useState(0);

  function handleOpen(index) {
    setTrigger(index);
  }

  if (props.data) {
    return (
      <div className="Results">
        <div className="results-word">
          <div className="container">
            <h2 className="text-capitalize">{props.data.word}</h2>
            {props.data.phonetics.map(function (phonetic, index) {
              return (
                <span key={index}>
                  <Phonetics phonetic={phonetic} />
                </span>
              );
            })}
          </div>
        </div>

        <div className="container wrap">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <span key={index}>
                <button
                  className={`meaning-button ${
                    buttonSelected === index ? "active" : ""
                  }`}
                  onClick={() => setButtonSelected(index)}
                >
                  {meaning.partOfSpeech}
                </button>
              </span>
            );
          })}

          {props.data.meanings.map(function (meaning, index) {
            return (
              <span key={index}>
                <Meaning
                  meaning={meaning}
                  trigger={trigger}
                  handleOpen={() => handleOpen(index)}
                  index={index}
                  selected={buttonSelected === index}
                />
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
