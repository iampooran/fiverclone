import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    freelancerBG: {
      freelancer1: "#4E4848",
      freelancer2: "#B48F19",
      freelancer3: "#B48F19",
      freelancer4: "#B48F19",
      freelancer5: "#B48F19",
      freelancer6: "#B48F19",
    }
  },
  // typography: {
  //   fontFamily: ["Sen"].join(","),
  // },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <CssBaseline />
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
  </StyledEngineProvider>
);