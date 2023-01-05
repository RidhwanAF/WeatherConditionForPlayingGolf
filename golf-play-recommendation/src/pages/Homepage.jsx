import {
  Box,
  Button,
  Card,
  createTheme,
  Icon,
  Paper,
  styled,
} from "@mui/material";
import * as React from "react";
import "../assets/scss/Homepage.scss";
import { TabTitle } from "../utils/Title";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/Logo.png";
import golfFlag from "../assets/images/GolfFlag.png";
import headerImage from "../assets/images/HeaderImage.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FilledBox = styled(Box)({
  flex: "1 1 auto",
});

export default function Homepage() {
  TabTitle("WheaGolf");

  return (
    <div className="background">
      <div className="header-background">
          <div className="header">
            <Box>
              <Typography
                color="text.main"
                style={{ fontWeight: "bold", fontSize: "24px" }}
              >
                <img src={logo} /> Wheagolf
              </Typography>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              <Box>
                <Typography
                  color="text.main"
                  style={{ fontWeight: "bold", fontSize: "96px" }}
                >
                  Check first <img src={golfFlag} /> <br />
                  and play soon
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="text.main"
                  style={{ fontWeight: "semi-bold", fontSize: "24px" }}
                >
                  let’s check the weather around your city <br /> we’ll inform
                  you to the perfect time for golfing
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ color: "#1A4CFB" }} />}
                >
                  <Typography color="#1A4CFB"> Get Started </Typography>
                </Button>
              </Box>
            </Box>
            <FilledBox />
            <Box>
              <img src={headerImage} />
            </Box>
            <FilledBox />
          </Box>
      </div>
      <Box>
        <Typography> Body </Typography>
      </Box>
    </div>
  );
}
