const React = require("react");
const Def = require("../default");

const showPlace = (data) => {
  return (
    <Def>
      <title>{data.place.name}</title>
      <main>
        <div id="placeInfo">
          <h1>{data.place.name}</h1>
          <h2>Rating</h2>
          <p>Currently unrated.</p>
          <h2>Description</h2>
          <p>
            {data.place.name} is a {data.place.cuisines} style restaurant and it
            is located in {data.place.city}, {data.place.state}
          </p>
          {/* if (data.place.founded === null){
                        <p>We do not know when it was established.</p>
                    } else { */}
          <p>Established in {data.place.founded}.</p>
          {/* } */}
          <h2>Comments</h2>
          <p>No comments yet.</p>
        </div>
        <div id="placeImage">
          <img
            className="placePic"
            src={data.place.pic}
            alt={data.place.name}
          ></img>
        </div>
        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
};

module.exports = showPlace;
