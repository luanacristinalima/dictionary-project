import useSound from "use-sound";

export default function PhoneticsAudio(props) {
  const soundUrl = `${props.audio}`;

  const [play, { isPlaying }] = useSound(soundUrl);

  if (props.audio) {
    return (
      <button onClick={play} active={isPlaying} className="PhoneticsAudio">
        <svg width="60" height="60">
          <circle
            cx="30"
            cy="30"
            r="30"
            fill="#000"
            style={{ cursor: "pointer" }}
          ></circle>
          <polygon
            points="22.199990213521364,17.000009786478635 22.199990213521364,42.999990213521365 44.29998532028205,30.00003914591454 44.29998532028205,29.99996085408546"
            fill="#fff"
            style={{ cursor: "pointer" }}
          ></polygon>
        </svg>
      </button>
    );
  } else {
    return null;
  }
}
