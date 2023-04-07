const React = require("react");
const Def = require("../default");

const editPlace = (data) => {
  // let placesFormatted = data.places.map((place) => {
  //     return(
  //         <div>
  //             <h2>{place.name}</h2>
  //             <img src={place.pic} alt={place.name}></img>
  //         </div>
  //         )
  // })
  return (
    <Def>
      <main>
        <h1>Edit Places</h1>
      </main>
    </Def>
  );
};

module.exports = editPlace;
