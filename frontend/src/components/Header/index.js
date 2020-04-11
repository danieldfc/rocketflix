import React from "react";

import { RFHeader, RFLogo } from "./components";
import logo from "~/assets/img/logo.png";

import Container from "./styles";

export default function Header() {
  return (
    <RFHeader className={"rf-header"}>
      <Container>
        <RFLogo src={logo} alt="" />
      </Container>
    </RFHeader>
  );
}
