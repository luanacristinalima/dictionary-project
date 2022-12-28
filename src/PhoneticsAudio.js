import ReactAudioPlayer from "react-audio-player";

export default function PhoneticsAudio(props) {
  return (
    <div className="PhoneticsAudio">
      <ReactAudioPlayer src={props.audio} controls />
    </div>
  );
}
