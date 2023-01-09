import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Homepage from "./pages/Homepage";

let theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#2C3E7F",
    },
    text: {
      main: "#FFFFFF",
      darkBlue: "#2C3E7F",
      lightBlue: "#7492FC",
      nightBlue: "#476FFB",
      deepBlue: "#0B1A4D",
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
