import React from "react";
import axios from "axios";
import GetLocation from "./GetLocation";

function GetFuture(props) {
  const getLocation = GetLocation();
  const getFuture_ApiEndpoint =
    "https://cuaca-gempa-rest-api.vercel.app/weather";

  const [responseData, setResponseData] = React.useState({});

  const getFuture = () => {
    function convertProvinsi(str) {
      return str.toLowerCase().replace(/\s/g, "-");
    }
    // let originalProvinsi = `${getLocation.principalSubdivision}`;
    let convertedProvinsi = convertProvinsi(
      `${getLocation.principalSubdivision}`
    );

    axios
      .get(`${getFuture_ApiEndpoint}/${convertedProvinsi}/bekasi`)
      .then((response) => {
        setResponseData(response.data.data);
        // props.render(response.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  React.useEffect(() => {
    if (getLocation.latitude && getLocation.longitude) {
      getFuture();
    }
  }, [getLocation.latitude, getLocation.longitude]);

  return responseData;
  // return <div>{responseData && <div>{props.render(responseData)}</div>}</div>;
}

export default GetFuture;
