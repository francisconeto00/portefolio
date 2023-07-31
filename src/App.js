import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "./App.scss";
import { light } from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: { // Correção do nome do atributo "palette"
    primary: {
      main: "#25283D",
    },
    secondary: {
      main: "#8F3985",
    },
    info: {
      main: "#98DFEA",
    },
  },
});

function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={`container ${scrolling ? "scrolling" : ""}`}>
        <Typography color={"info.main"} fontSize={scrolling ? "17px": "20px"}>
          Seu conteúdo aqui
        </Typography>
      </div>
      <div className="title-container">

      <Typography color={"info.main"} variant="h1">
          Seu conteúdo aqui
        </Typography>
        <Typography color={"info.main"} variant="h1">
          Seu conteúdo aqui
        </Typography>
        <Typography color={"info.main"} variant="h1">
          Seu conteúdo aqui
        </Typography>
        <Typography color={"info.main"} variant="h1">
          Seu conteúdo aqui
        </Typography>
        <Typography color={"info.main"} variant="h1">
          Seu conteúdo aqui
        </Typography>
        <Typography color={"info.main"} variant="h1">
          Seu conteúdo aqui
        </Typography>
        <Typography color={"info.main"} variant="h1">
          Seu conteúdo aqui
        </Typography>
        <Typography color={"info.main"} variant="h1">
          Seu conteúdo aqui
        </Typography>
        <Typography color={"info.main"} variant="h1">
          Seu conteúdo aqui
        </Typography>
        </div>
       

    </ThemeProvider>
  );
}

export default App;
