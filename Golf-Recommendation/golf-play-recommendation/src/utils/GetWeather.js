import React from "react";
import axios from "axios";
import GetLocation from "./GetLocation";

function GetWeather(props) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const getLocation = GetLocation();
  const getKota_ApiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  const [responseData, setResponseData] = React.useState({});

  const getWeather = () => {
    axios
      .get(
        `${getKota_ApiEndpoint}?lat=${getLocation.latitude}&lon=${getLocation.longitude}&appid=${apiKey}`
      )
      .then((response) => {
        setResponseData(response.data);
        props.render(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  React.useEffect(() => {
    if (getLocation.latitude && getLocation.longitude) {
      getWeather();
    }
  }, [getLocation.latitude, getLocation.longitude]);

  return <div>{responseData && <div>{props.render(responseData)}</div>}</div>;
}

export default GetWeather;
