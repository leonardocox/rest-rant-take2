const React = require("react");
const Def = require("../default");

const index = (data) => {
  let placesFormatted = data.places.map((place) => {
    return (
      <div key={place.id} className="col-sm-6 col-md-4 col-lg-3">
        <h2 className="text-center">
          <a href={`/places/${place.id}`}>{place.name}</a>
        </h2>
        <p className="text-center">{place.cuisines}</p>
        <img className="placePic" src={place.pic} alt={place.name}></img>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def title="Places">
      <title>Places</title>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
};

module.exports = index;
