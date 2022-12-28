import ReactAudioPlayer from "react-audio-player";

export default function PhoneticsAudio(props) {
  if (props.audio) {
    return (
      <div className="PhoneticsAudio">
        <ReactAudioPlayer src={props.audio} controls />
      </div>
    );
  } else {
    return null;
  }
}
