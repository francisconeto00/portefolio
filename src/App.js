import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  createTheme,
  ThemeProvider,
  Grid,
  Button,
  MenuItem,
  Menu,
  Avatar,
  Card,
  CardContent,
  Select,
  IconButton,
} from "@mui/material";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import img from "../src/assets/IMG_20220311_210424_654__01-modified.png";
import Fade from "@mui/material/Fade";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import next from "../src/assets/nextjs-logo.png";
import js from "../src/assets/javascript-logo.png";
import react from "../src/assets/react.png";
import java from "../src/assets/java-logo.png";
import kotlin from "../src/assets/kotlin.png";
import py from "../src/assets/python-logo.avif";
import ts from "../src/assets/ts-logo.png";
import css from "../src/assets/css.png";
import html from "../src/assets/HTML5.png";
import sc from "../src/assets/styled-comp.png";
import scss from "../src/assets/scss.png";
import c from "../src/assets/c-logo.png";
import flask from "../src/assets/flask.png";
import { MantineProvider } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useTranslation } from "react-i18next";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

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
  const { t, i18n } = useTranslation();
  const about = useRef(null);
  const tecs = useRef(null);
  const proj = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    const handleScroll = () => {
      const appBarHeight = 50;
      const scrolled = window.scrollY;
      if (scrolled > appBarHeight) {
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function smoothScrollTo(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLang(language);
  };
  const currentYear = new Date().getFullYear();
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ThemeProvider theme={theme}>
        <div className={`container ${scrolling ? "scrolling" : ""}`}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              ml: {
                xs: 1,
                sm: 1,
                md: 4,
                ls: 4,
                xl: 4,
              },
            }}
          >
            <Select
              sx={{
                "&:before": {
                  borderColor: "white", // Cor da borda antes do seletor ser aberto
                },
                "&:after": {
                  borderColor: "white", // Cor da borda após o seletor ser aberto
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderColor: "white", // Cor da borda ao passar o mouse
                },
                "& .MuiSelect-icon": {
                  color: "white", // Cor do ícone
                },
                // Estilo do menu suspenso (opcional)
                "& .MuiMenu-paper": {
                  backgroundColor: "#333", // Cor de fundo do menu
                  color: "white", // Cor do texto no menu
                },
              }}
              variant="standard"
              value={lang}
              onChange={(e) => handleChangeLanguage(e.target.value)}
            >
              <MenuItem value={"pt"}>
                <span className="fi fi-pt"> </span>
              </MenuItem>

              <MenuItem value={"en"}>
                <span className="fi fi-gb"> </span>
              </MenuItem>
            </Select>

            <Typography
              sx={{
                ml: {
                  xs: 2,
                  sm: 2,
                  md: 12,
                  ls: 12,
                  xl: 12,
                },
              }}
              align="center"
              color="white"
              fontSize="20px"
            >
              <b>Francisco Neto</b>
            </Typography>
          </Box>

          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              pr: 2,
              mr: 0,
              color: "white",
            }}
          >
            <Button
              mr={4}
              onClick={() => smoothScrollTo(about)}
              sx={{ color: "white" }}
            >
              {t("about")}
            </Button>

            <Button
              mr={4}
              onClick={() => smoothScrollTo(tecs)}
              sx={{ color: "white" }}
            >
              {t("tec")}
            </Button>
            <Button
              mr={4}
              onClick={() => smoothScrollTo(proj)}
              sx={{ color: "white" }}
            >
              {t("proj")}
            </Button>
          </Box>
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ color: "white" }}
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
              PaperProps={{
                sx: {
                  backgroundColor: "white",
                  color: "rgba(123, 45, 253, 1)",
                },
              }}
            >
              <MenuItem onClick={() => smoothScrollTo(about)}>
                {t("about")}
              </MenuItem>
              <MenuItem onClick={() => smoothScrollTo(tecs)}>
                {t("tec")}
              </MenuItem>
              <MenuItem onClick={() => smoothScrollTo(proj)}>
                {t("proj")}
              </MenuItem>
            </Menu>
          </Box>
        </div>
        <div className="title-container" ref={about}>
          <Container
            sx={{
              py: {
                xs: 10,
                sm: 10,
              },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              mt={3}
              sx={{
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "10px",
                boxShadow: {
                  xs: "none",
                  sm: "none",
                  md: " 10px 10px 21px -3px rgba(0,0,0,0.75)",
                  ls: " 10px 10px 21px -3px rgba(0,0,0,0.75)",
                  xl: " 10px 10px 21px -3px rgba(0,0,0,0.75)",
                },
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  ls: "row",
                  xl: "row",
                },
                py: 4,
                px: 2,
                width: "100%",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "space-between",
                  ls: "space-between",
                  xl: "space-between",
                },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "3px solid rgba(123, 45, 253, 1)",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  sx={{
                    width: 300,
                    height: 300,
                  }}
                  alt="profile"
                  src={img}
                />
              </Box>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "70%",
                    ls: "70%",
                    xl: "70%",
                  },
                }}
              >
                <Typography
                  align="center"
                  mb={2}
                  color="rgba(123, 45, 253, 1)"
                  fontSize={{ xs: 25, md: 30 }}
                >
                  <b>{t("about")}</b>
                </Typography>
                <Typography fontSize={{ xs: 15, md: 20 }}>
                  O meu nome é Francisco Neto, tenho 23 anos e sou natural de
                  Santo Tirso. Sou apaixonado por tecnologia e desenvolvimento
                  de software. Atualmente, trabalho como desenvolvedor frontend
                  freelancer em projetos baseados em React.js.
                </Typography>
                <Typography fontSize={{ xs: 15, md: 20 }}>
                  A minha formação académica passa pela Universidade do Minho,
                  onde me encontro no último ano do Mestrado em Engenharia de
                  Telecomunicações e Informática. Foi neste curso que desenvolvi
                  o gosto pela programação, aprendizagem continua e diversos
                  conhecimentos em redes e comunicações.
                </Typography>
              </Box>
            </Box>
          </Container>
        </div>

        <div className="languages " ref={tecs}>
          <Container
            sx={{
              py: {
                xs: 10,
                sm: 10,
              },
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
              container
              spacing={{ xs: 6, sm: 10, md: 12, ls: 12, xl: 12 }}
            >
              <Grid item>
                <img src={next} alt="next" width="100px" />
              </Grid>
              <Grid item>
                <img src={react} alt="react" width="100px" />
              </Grid>
              <Grid item>
                <img src={js} alt="js" width="100px" />
              </Grid>
              <Grid item>
                <img src={ts} alt="ts" width="100px" />
              </Grid>
              <Grid item>
                <img className="kimg" src={kotlin} alt="kotlin" width="100px" />
              </Grid>
              <Grid item>
                <img src={py} alt="py" width="100px" />
              </Grid>
              <Grid item>
                <img src={scss} alt="scss" width="100px" />
              </Grid>
              <Grid item>
                <img src={sc} alt="sc" width="100px" />
              </Grid>
              <Grid item>
                <img src={css} alt="css" width="100px" />
              </Grid>
              <Grid item>
                <img src={html} alt="html" width="100px" />
              </Grid>
              <Grid item>
                <img src={java} alt="java" width="100px" />
              </Grid>
              <Grid item>
                <img src={c} alt="c" width="100px" />
              </Grid>
            </Grid>
          </Container>
        </div>

        <div className="projects" ref={proj}>
          <Carousel
            slideSize="40%"
            height={480}
            slideGap="sm"
            controlsOffset="xs"
            dragFree
            align={"start"}
            withIndicators
            w={{
              base: "90%",
              xs: "90%",
              sm: "90%",
              md: "90%",
              lg: "90%",
              xl: "70%",
            }}
            styles={{
              control: {
                background: "rgba(123, 45, 253, 1)",
                opacity: "0.5",
                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: "0" },
            ]}
          >
            {projects.map((p, index) => (
              <Carousel.Slide key={p.title + index}>
                <Card
                  sx={{
                    height: "90%",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography align="center" variant="h6" color={"black"}>
                        {p.title}
                      </Typography>
                      <Typography>{p.discription}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {p.languages.map((l, index) => (
                        <img
                          alt={l.name}
                          key={l.name + index}
                          src={l.img}
                          width="30px"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
        <Box
          sx={{
            borderTop: "1px solid white",
            width: "100vw",
            backgroundColor: "rgba(12, 12, 12, 255)",

            padding: "10px 0",
            zIndex: 1000,
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <IconButton
                sx={{ color: "rgba(123, 45, 253, 1)" }}
                href="mailto:fdgneto@ubiwhere.com"
                target="_blank"
              >
                <EmailIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{ color: "rgba(123, 45, 253, 1)" }}
                href="https://www.linkedin.com/in/francisco-neto-567a92241/"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{ color: "rgba(123, 45, 253, 1)" }}
                href="https://www.instagram.com/xico.netoo/"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Box
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "rgba(123, 45, 253, 1)",
              marginTop: "5px",
            }}
          >
            Copyright &copy; Francisco Neto {currentYear}
          </Box>
        </Box>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;
const projects = [
  {
    title: "Weather App",
    discription:
      "Webapp de monitorização meteriologica usando com React.js e com a API oficial do IPMA https://api.ipma.pt/",
    languages: [
      {
        name: "React.js",
        img: react,
      },
      {
        name: "HTML",
        img: html,
      },
      {
        name: "Styled Components",
        img: sc,
      },
    ],
  },
  {
    title: "PITI project",
    discription:
      "Projeto no ambito da disciplina de Projeto Integrador de Telecomunicações e Informatica, com o objetivo de criar uma ligação unidirecional por link otico, foram utilizados componentes eletronicos e arduinos a nivel de hardware e C, Pyhton, Flask e React.js para o software de chat.",
    languages: [
      {
        name: "React.js",
        img: react,
      },
      {
        name: "HTML",
        img: html,
      },
      {
        name: "CSS",
        img: css,
      },
      {
        name: "Python",
        img: py,
      },
      {
        name: "C",
        img: c,
      },
    ],
  },
  {
    title: "LTI project",
    discription:
      "Projeto no ambito da disciplina de Laboratorio de Telecomunicações e Informatica, com o objetivo de monitorar temperaturas de varios sensores que poderiam estar espalhados por varios compartimentos de um recinto mostrando-os posteriormente numa dashboard de um website. Foram utilizados varios componentes eletronicos, arduinos a nivel de hardware e C, Flask, HTML, CSS e Javascript a nivel de software.",
    languages: [
      {
        name: "Javascript",
        img: js,
      },
      {
        name: "HTML",
        img: html,
      },
      {
        name: "CSS",
        img: css,
      },
      {
        name: "Flask",
        img: flask,
      },
      {
        name: "C",
        img: c,
      },
    ],
  },
  {
    title: "Chat por Radio Frequencia",
    discription:
      "Projeto no ambito da disciplina Emulaçao e Simulaçao de Redes de Telecomunicações, com o objetivo de criar um chat fiavel por radiofrequencia, foram utilizados componentes eletronicos e arduinos a nivel de hardware e C, Pyhton para o software de chat.",
    languages: [
      {
        name: "Python",
        img: py,
      },
      {
        name: "C",
        img: c,
      },
    ],
  },
  {
    title: "Money.inc App",
    discription:
      "Projeto no ambitp da disciplina de Paradigmas da Programação II, com o objetivo de criar uma aplicação android para um banco ficticio, em que o utilizador conseguia ver saldo, transferencias, extrato bancario assim como efetuar pagamentos e transferencias.",
    languages: [
      {
        name: "Kotlin",
        img: kotlin,
      },
    ],
  },
  {
    title: "Covid-19",
    discription:
      "Projeto no ambito da disciplina de Paradigmas da Programação I, é uma aplicação que calculava e registava infeções por COVID-19 numa determinada zona. Java foi a linguagem utilizada.",
    languages: [
      {
        name: "Java",
        img: java,
      },
    ],
  },
];
