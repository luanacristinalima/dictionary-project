import PhoneticsAudio from "./PhoneticsAudio";

export default function Phonetics(props) {
  return (
    <span className="Phonetics">
      {props.phonetic.text}
      <span>
        <PhoneticsAudio audio={props.phonetic.audio} />
      </span>
    </span>
  );
}
