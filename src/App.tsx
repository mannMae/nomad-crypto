import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { darkTheme, theme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atom";

interface IGlobalStyle{
  isDark:boolean;
}

const GlobalStyle = createGlobalStyle`
  body{
    background-color:${props=>props.theme.bgColor};
    text-color:${props=>props.theme.textColor};
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
    <ThemeProvider theme={isDark?darkTheme:theme}>
      <GlobalStyle />
      <Router/>
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
    </>
  );
}

export default App;
