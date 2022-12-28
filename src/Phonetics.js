import PhoneticsAudio from "./PhoneticsAudio";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <PhoneticsAudio audio={props.phonetic.audio} />
      {props.phonetic.text}
    </div>
  );
}
