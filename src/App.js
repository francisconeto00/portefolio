import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  createTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material";
import img from "../src/assets/IMG_20220311_210424_654__01-modified.png";
import Fade from "@mui/material/Fade";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons";

const theme = createTheme({
  palette: {
    // Correção do nome do atributo "palette"
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
  const [showTypography, setShowTypography] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const appBarHeight = 10; // Altura aproximada da AppBar em pixels
      const scrolled = window.scrollY;

      if (scrolled > appBarHeight) {
        setScrolling(true);
        setShowTypography(false);
      } else {
        setScrolling(false);
        setShowTypography(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`container ${scrolling ? "scrolling" : ""}`}>
        <Typography
          ml={4}
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesomeIcon icon={faMoon} />
          <Typography
            ml={12}
            align="center !important"
            color="white"
            display={scrolling ? "block" : "none"}
            fontSize={scrolling ? "17px" : "20px"}
          >
            <b>Francisco Neto</b>
          </Typography>
        </Typography>

        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            pr: 2,
            mr: 0,
          }}
        >
          <Typography mr={4}>Sobre Mim</Typography>
          <Typography mr={4}>Linguagens</Typography>
          <Typography mr={4}>Projetos</Typography>
        </Box>
        <Box sx={{ display: { md: "none", xs: "flex" } }}>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </div>
      <div className="title-container">
        <Container sx={{ height: "100%" }}>
          <Typography
            mt={10}
            color={"info.main"}
            variant="h4"
            className={`typography ${scrolling ? "transition" : ""} ${
              showTypography ? "appear" : "hidden"
            }`}
          >
            Francisco Neto
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid red",
              borderRadius: "10px",
            }}
          >
            <Box>
              <Avatar
                sx={{ width: 250, height: 250, border: "1px solid red" }}
                alt="Remy Sharp"
                src={img}
              />
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
