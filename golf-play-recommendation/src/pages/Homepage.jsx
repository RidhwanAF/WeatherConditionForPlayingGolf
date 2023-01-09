import { Box, Button, Grid, Paper, styled } from "@mui/material";
import * as React from "react";
import "../assets/scss/Homepage.scss";
import "../assets/scss/Homepage768px.scss";
import "../assets/scss/Homepage574px.scss";
import "../assets/scss/Homepage454px.scss";
import { TabTitle } from "../utils/Title";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/Logo.png";
import iconWindy from "../assets/images/icon-windy.png";
import iconRain from "../assets/images/icon-rain.png"
import iconCloud from "../assets/images/icon-cloud.png"
import golfFlag from "../assets/images/GolfFlag.png";
import headerImage from "../assets/images/HeaderImage.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import AirIcon from "@mui/icons-material/Air";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityTwoToneIcon from "@mui/icons-material/OpacityTwoTone";
import FutureWeathers from "../data/FutureWeather";
import getDate from "../utils/GetDate";
import GetLocation from "../utils/GetLocation";
import GetWeather from "../utils/GetWeather";

const FilledBox = styled(Box)({
  flex: "1 1 auto",
});

export default function Homepage() {
  TabTitle("WeaGolf");

  //navigate to home
  let navigate = useNavigate();
  function handleClickToHomepage() {
    navigate("/");
  }

  const getLocation = GetLocation();

  const [main, setMain] = React.useState(null);
  const [hum, setHum] = React.useState(null);
  const [wind, setWind] = React.useState(null);
  const [temp, setTemp] = React.useState(null);
  const [time, setTime] = React.useState(null);

  const handleWeatherData = (data) => {
    setTimeout(() => {
      if (data.weather && Array.isArray(data.weather)) {
        setMain(data.weather[0].main);
        setHum(data.main.humidity);
        setWind((data.wind.speed * 3.6).toFixed(1));
        setTemp((data.main.temp - 273.15).toFixed(1));
        setTime(data.timezone);
      }
    });
  };

  //switching bg color, icon, font color for weather
  let paperColor = {};
  let weatherIcon = {};
  let fontColor = {};

  switch (main) {
    case "Clouds":
      paperColor = {
        background: `linear-gradient(204.05deg, #1A4CFB -63.97%, rgba(26, 76, 251, 0) 99.88%)`,
      };
      weatherIcon = iconCloud;
      fontColor = "text.nightBlue"
      break;
    case "Rain":
      paperColor = {
        background:
          "linear-gradient(195.42deg, #142663 6.95%, rgba(26, 76, 251, 0) 104.2%)",
      };
      weatherIcon = iconRain;
      fontColor = "text.darkBlue"
      break;
    default:
      paperColor = {
        background: `linear-gradient(0deg, #CCD8FF -20.49%, rgba(171, 190, 255, 0) 189.27%)`,
      };
      break;
  }

  return (
    <div className="background">
      <div className="header-background">
        <div className="header">
          <Box>
            <Button onClick={handleClickToHomepage}>
              <Typography className="header-appbar" color="text.main">
                <img
                  className="header-appbar-icon"
                  alt="weagolf icon"
                  src={logo}
                />{" "}
                Weagolf
              </Typography>
            </Button>
          </Box>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FilledBox />
          <div className="header-content">
            <Box>
              <Box>
                <Typography className="text-header" color="text.main">
                  Check first{" "}
                  <img
                    className="img-text-header"
                    alt="golf flag icon"
                    src={golfFlag}
                  />{" "}
                  <br />
                  and play soon
                </Typography>
              </Box>
              <Box>
                <Typography className="text-header-desc" color="text.main">
                  let’s check the weather around your city <br /> we’ll inform
                  you to the perfect time for golfing
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ color: "#1A4CFB" }} />}
                >
                  <Typography fontWeight="bold" color="#1A4CFB">
                    {" "}
                    Get Started{" "}
                  </Typography>
                </Button>
              </Box>
            </Box>
          </div>
          <FilledBox />
          <Box>
            <img
              className="header-image"
              alt="person while playing a golf"
              src={headerImage}
            />
          </Box>
          <FilledBox />
        </Box>
      </div>
      <Box>
        <div className="body-content">
          <FilledBox />
          <Container>
            <Paper elevation={0} className="paper-weather" style={paperColor}>
              <Typography
                className="content-date"
                fontWeight="bold"
                color="text.main"
              >
                {getDate()}
              </Typography>
              <Typography
                className="content-location"
                fontWeight="bold"
                color="text.main"
              >
                {getLocation.principalSubdivision}, {getLocation.city}
              </Typography>
              <img
                className="content-img-weather"
                alt="weather"
                src={weatherIcon}
              />
              <GetWeather render={handleWeatherData} />
              <Typography
                className="content-weather"
                fontWeight="bold"
                color={fontColor}
              >
                {main}
              </Typography>
            </Paper>
            <div className="weather-info">
              <Typography
                className="weather-info-humidty"
                fontWeight="bold"
                color="text.lightBlue"
              >
                <OpacityTwoToneIcon
                  fontSize="large"
                  sx={{ color: "text.lightBlue" }}
                />{" "}
                {hum}%
              </Typography>
              <Typography
                className="weather-info-wind"
                fontWeight="bold"
                color="text.lightBlue"
              >
                <AirIcon fontSize="large" sx={{ color: "text.lightBlue" }} />{" "}
                {wind} km/h
              </Typography>
              <Typography
                className="weather-info-temperature"
                fontWeight="bold"
                color="text.lightBlue"
              >
                <DeviceThermostatIcon
                  fontSize="large"
                  sx={{ color: "text.lightBlue" }}
                />{" "}
                {temp}°C
              </Typography>
            </div>
            <Paper elevation={0} className="paper-weather-recommendation">
              <Typography
                className="weather-recommendation-desc"
                fontWeight="bold"
                color="text.nightBlue"
              >
                You are recommended to play golf with today's weather
              </Typography>
            </Paper>
            <div className="future-weathers">
              <Typography
                className="future-weather-title"
                fontWeight="bold"
                color="text.nightBlue"
              >
                Future Weather
              </Typography>
              <div className="future-weather-content">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  {FutureWeathers.map((futureWeather, key) => (
                    <Paper
                      elevation={0}
                      className="paper-future-weather"
                      key={key}
                    >
                      <Typography
                        className="future-weather-day"
                        fontWeight="bold"
                        color="text.main"
                      >
                        {futureWeather.day}
                      </Typography>
                      <img
                        className="future-img-weather"
                        alt="future weather"
                        src={iconWindy}
                      />
                      <Typography
                        className="future-weather-weather"
                        fontWeight="bold"
                        color="text.main"
                      >
                        {futureWeather.weather}
                      </Typography>
                      <Typography
                        className="future-weather-temperature"
                        fontWeight="bold"
                        color="text.main"
                      >
                        {futureWeather.temperature}
                      </Typography>
                    </Paper>
                  ))}
                </Grid>
              </div>
            </div>
          </Container>
          <FilledBox />
        </div>
      </Box>
    </div>
  );
}
