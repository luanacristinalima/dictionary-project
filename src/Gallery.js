import "./Gallery.css";

export default function Gallery(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Gallery container wrap">
        <div className="row gy-3">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="flower"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
