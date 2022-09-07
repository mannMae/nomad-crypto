import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";

const GlobalStyle = createGlobalStyle`
  body{
    color:red;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
