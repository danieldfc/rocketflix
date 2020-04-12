import React from "react";

import logo from "~/assets/img/logo.png";

import { RFHeader, RFLogo } from "./styles";

export default function Header() {
  return (
    <RFHeader>
      <div className="rf-navbar">
        <RFLogo src={logo} alt="" />
      </div>
    </RFHeader>
  );
}
