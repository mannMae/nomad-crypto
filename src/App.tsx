import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { darkTheme, theme } from "./theme";

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

const Button = styled.button`
  width:150px;
  height:50px;
  border-radius:10px;
  border:none;
  background-color:${props=>props.theme.accentColor};
  color:white;
  font-weight:700;
  font-size:15px;
  cursor:pointer;
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
    <ThemeProvider theme={isDark?darkTheme:theme}>
      <Button onClick={()=>setIsDark(!isDark)}>DarkModeToggle</Button>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
    </>
  );
}

export default App;
