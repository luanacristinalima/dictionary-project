import React, { useState } from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  const [trigger, setTrigger] = useState(0);

  function handleOpen(index) {
    setTrigger(index);
  }

  if (props.data) {
    return (
      <div className="Results">
        <h2 className="text-capitalize">{props.data.word}</h2>
        {props.data.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
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
              />
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
