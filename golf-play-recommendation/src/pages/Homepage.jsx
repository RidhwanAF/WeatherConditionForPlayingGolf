import { Box, Card, Paper } from "@mui/material";
import * as React from "react";
import "../assets/scss/Homepage.scss";
import { TabTitle } from "../utils/Title";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

export default function Homepage() {
  TabTitle("Can I Play Golf?");

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "500px",
          backgroundImage: "linear-gradient(69.82deg, #1A4CFB 0%, rgba(26, 76, 251, 0) 144.6%)",
        }}
      >
        <Typography> Header </Typography>
      </Box>
      <Box>
        <Typography> Body </Typography>
      </Box>
    </Box>
  );
}
