import React, { useState, useEffect, useRef } from "react";
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
  const icon = useRef(null);

  navigator.geolocation.getCurrentPosition(
    position => setLat(position.coords.latitude),
    err => setErrorMessage(err.message)
  );

  useEffect(() => {
    console.log(icon.current.clientHeight);
  });

  return (
    <div>      
      <i ref={icon} className='sun icon massive'></i>
      {renderContent(lat, errorMessage)}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
