import React from "react";

import Header from "~/components/Header";

import PropTypes from "prop-types";

import { Wrapper, Content } from "./styles";

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};
