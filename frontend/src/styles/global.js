import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif&family=Open+Sans&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: 0
  }

  html, body {
    height: 100%;
    ${"" /* font-family: "Noto Serif", serif; */}
   font-family: "Open Sans", sans-serif;
  }

  #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
