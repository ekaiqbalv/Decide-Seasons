import React, { useState } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const renderContent = (lat, errorMessage) => {
  if (lat && !errorMessage) {
    return <SeasonDisplay lat={lat} />;
  }

  if (!lat && errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  return <Spinner message={"Please accept location request"} />;
}

const App = () => {
  const [lat, setLat] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  navigator.geolocation.getCurrentPosition(
    position => setLat(position.coords.latitude),
    err => setErrorMessage(err.message)
  );

  return (
    <div>
      {renderContent(lat, errorMessage)}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
