const React = require("react");
const Def = require("./default");

const home = () => {
  return (
    <Def title="REST-Rant Home">
      <title>REST-Rant Home</title>
      <main>
        <h1>REST-Rant Home Page</h1>
        {/* <div id="navBar">
                        <a href="/places">
                            <button id="homePlaceBtn" className="btn-primary">Places Page</button>
                        </a>
                        <a href="/places/newPlace">
                            <button id="newPlaceBtn" className="btn-primary">New Place Page</button>
                        </a>
                    </div> */}
        <div id="homeImageContainer" className="container">
          <div className="row-1">
            <div className="col-1">
              <img
                className="homeImage"
                src="/images/steak.jpg"
                alt="Steak Picture"
              ></img>
              <a
                className="homeLink"
                href="https://pixabay.com/photos/steak-sirloin-meat-beef-food-1083567/"
              >
                Image by dbreen on Pixaby
              </a>
            </div>
            <div className="col-2">
              <img
                className="homeImage"
                src="/images/chicken-wings.jpg"
                alt="Wings Picture"
              ></img>
              <a
                className="homeLink"
                href="https://www.freepik.com/photos/buffalo-wings"
              >
                Buffalo wings photo created by timolina - www.freepik.com
              </a>
            </div>
          </div>
          {/* <div className="row-2">
                            <div className="col-1">
                                <img className="homeImage" src="/images/     " alt=" Picture"></img>
                                <a className="homeLink" href=""></a>
                            </div>
                            <div className="col-2">
                                <img className="homeImage" src="/images/     " alt=" Picture"></img>
                                <a className="homeLink" href=""></a>
                            </div> 
                        </div> */}
        </div>
      </main>
    </Def>
  );
};

module.exports = home;
