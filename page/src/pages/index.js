import Menu from "../components/Menu"
import Layout from "../components/Layout"
import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";
import GlobalTheme from "../theme/global";
import styled from "styled-components";


export default function Home() {
  
    const [theme, setTheme] = useState("light");
  
    const toggleTheme = () => {
      if (theme === "light") {
        window.localStorage.setItem("theme", "dark");
        setTheme("dark");
      } else {
        window.localStorage.setItem("theme", "light");
        setTheme("light");
      }
    };
  
    useEffect(() => {
      const localTheme = window.localStorage.getItem("theme");
      localTheme && setTheme(localTheme);
    }, []);
  

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <Fragment>
      <GlobalTheme />
      {/* <Menu /> */}
      <ButtonChange onClick={toggleTheme}>Theme {theme}</ButtonChange>
      <Layout />
    </Fragment>
  </ThemeProvider>
);
}


const ButtonChange = styled.button`
  position: fixed;
  font-size: 18px;
  background: #363636;
  color: #fff;
  padding: 10px;
  border-radius: 50px;
  margin-left: 1100px;
  margin-top: 500px;
  z-index: 1;
`;


