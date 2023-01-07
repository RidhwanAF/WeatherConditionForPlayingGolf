import {
  Box,
  Button,
  Card,
  createTheme,
  Grid,
  Icon,
  Paper,
  styled,
} from "@mui/material";
import * as React from "react";
import "../assets/scss/Homepage.scss";
import "../assets/scss/Homepage768px.scss";
import "../assets/scss/Homepage574px.scss";
import "../assets/scss/Homepage454px.scss";
import { TabTitle } from "../utils/Title";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/Logo.png";
import iconWindy from "../assets/images/icon-windy.png";
import golfFlag from "../assets/images/GolfFlag.png";
import headerImage from "../assets/images/HeaderImage.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import AirIcon from "@mui/icons-material/Air";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityTwoToneIcon from "@mui/icons-material/OpacityTwoTone";
import FutureWeathers from "../data/FutureWeather";

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

  return (
    <div className="background">
      <div className="header-background">
        <div className="header">
          <Box>
            <Button onClick={handleClickToHomepage}>
              <Typography className="header-appbar" color="text.main">
                <img className="header-appbar-icon" src={logo} /> Weagolf
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
                  Check first <img className="img-text-header" src={golfFlag} />{" "}
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
            <img className="header-image" src={headerImage} />
          </Box>
          <FilledBox />
        </Box>
      </div>
      <Box>
        <div className="body-content">
          <FilledBox />
          <Container>
            <Paper elevation={0} className="paper-weather">
              <Typography
                className="content-date"
                fontWeight="bold"
                color="text.main"
              >
                Sunday, 21 August 2023
              </Typography>
              <Typography
                className="content-location"
                fontWeight="bold"
                color="text.main"
              >
                Bandung
              </Typography>
              <img className="content-img-weather" src={iconWindy} />
              <Typography
                className="content-weather"
                fontWeight="bold"
                color="text.main"
              >
                Windy
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
                55%
              </Typography>
              <Typography
                className="weather-info-wind"
                fontWeight="bold"
                color="text.lightBlue"
              >
                <AirIcon fontSize="large" sx={{ color: "text.lightBlue" }} /> 8
                km/h
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
                90°C
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
                      <img className="future-img-weather" src={iconWindy} />
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
