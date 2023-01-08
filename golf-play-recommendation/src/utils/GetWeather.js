import React from "react";
import axios from "axios";

function GetWeather(props) {
  const apiKey = "86cc3670b200fdc8dbe86fb47d27b830";
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [responseData, setResponseData] = React.useState({});

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    },
    () => console.error("Error getting location"),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );

  const getKota_ApiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

  const getWeather = () => {
    axios
      .get(
        `${getKota_ApiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
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
    if (latitude && longitude) {
      getWeather();
    }
  }, [latitude, longitude]);

  return <div>{responseData && <div>{props.render(responseData)}</div>}</div>;
}

export default GetWeather;
