import React from "react";

import logo from "~/assets/img/logo.png";

import { RFHeader, RFLogo, RFMenuNavBar, RFSearch } from "./styles";

export default function Header() {
  return (
    <RFHeader>
      <RFLogo src={logo} alt="" />
      <RFMenuNavBar>
        <a href="#top">HOME</a>
        <a href="#top">COMUNIDADE</a>
        <a href="#top">CONHEÇA</a>
        <a href="#top">LOGOUT</a>
        <RFSearch />
      </RFMenuNavBar>
    </RFHeader>
  );
}
