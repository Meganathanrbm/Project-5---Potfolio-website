import React from "react";
import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
      contrastText: '#fff',
    },
    secondary: {
      main: "#f44336",
      contrastText: '#fff',
    },
    success:{
      main:"#4CAF50",
      contrastText: '#fff',
    }
  },
});

const CButton = (props) => {
  return (
    <ThemeProvider theme={theme}
    >
      <Button
        variant={props.variant}
        size={props.size}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        onClick={props.onClick}
        color={props.color}
        href={props.href}
      >
        {props.title}
      </Button>
    </ThemeProvider>
  );
};

export default CButton;
