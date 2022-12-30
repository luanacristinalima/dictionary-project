export default function Definition(props) {
  return (
    <ol className="Definition">
      {props.meaning.map(function (definition, index) {
        return (
          <div key={index}>
            <li>{definition.definition}</li>
            <p className="mt-2">
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </ol>
  );
}
