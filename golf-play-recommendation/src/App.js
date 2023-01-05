import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import Homepage from './pages/Homepage';

let theme = createTheme({
  palette: {
    primary: {
      main: "#DADADA",
    },
    secondary: {
      main: "#ED711F",
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
})

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
