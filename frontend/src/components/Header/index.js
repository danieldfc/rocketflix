import React from "react";

import logo from "~/assets/img/logo.png";

import { RFHeader, RFLogo } from "./components";

export default function Header() {
  return (
    <RFHeader className="rf-header">
      <div>
        <RFLogo src={logo} alt="" />
      </div>
    </RFHeader>
  );
}
