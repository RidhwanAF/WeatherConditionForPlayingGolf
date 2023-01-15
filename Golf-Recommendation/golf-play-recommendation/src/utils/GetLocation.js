import React from "react";
import axios from "axios";

const getCityName_ApiEndpoint =
  "https://api.bigdatacloud.net/data/reverse-geocode-client?";

function GetLocation() {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [responseData, setResponseData] = React.useState({});

  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  const getLocation = () => {
    axios
      .get(
        `${getCityName_ApiEndpoint}latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      )
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((e) => {
        alert("Oops! Something went wrong, Please try again...");
        console.error(e);
      });
  };

  React.useEffect(() => {
    getLocation();
  }, [responseData.latitude, responseData.longitude]);

  return responseData;
}

export default GetLocation;
