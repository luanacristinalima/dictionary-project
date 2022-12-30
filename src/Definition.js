export default function Definition(props) {
  return (
    <span className="Definition">
      {props.meaning.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </span>
  );
}
