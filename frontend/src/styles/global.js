import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Button from "antd/lib/button";

import Input from "antd/lib/input";

import styled, { createGlobalStyle } from "styled-components";

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

export const RFInputTextPassword = styled(Input.Password)`
  width: 100%;
  height: 45px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(128, 128, 128, 0.25);
  border-radius: 10px;

  ::placeholder {
    ${"" /* padding-left: 3.5%; */}
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    ${"" /* line-height: 21px; */}
    /* identical to box height */

    color: #666666;
  }

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    ${"" /* color: #666666; */}
  }

  .ant-input {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const RFInputText = styled(Input)`
  width: 100%;
  height: 45px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(128, 128, 128, 0.25);
  border-radius: 10px;

  ::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    ${"" /* color: #666666; */}
  }

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    ${"" /* color: #666666; */}
  }

  .ant-input {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const RFButton = styled(Button)`
  width: 100%;
  height: 45px;
  background: #9074ee;
  border: 1px solid #9074ee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  color: #ffffff;
  :hover {
    background: #ffffff;
    border: 1px solid #ffffff;
    color: #9074ee;
  }
`;

export const RFButtonWhite = styled(Button)`
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  color: #9074ee;

  :hover {
    background: #9074ee;
    border: 1px solid #9074ee;
    color: #ffffff;
  }
`;
