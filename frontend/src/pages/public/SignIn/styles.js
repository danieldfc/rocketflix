import React from "react";

import Button from "antd/lib/button";

import Input from "antd/lib/input";

import styled from "styled-components";

import logow from "~/assets/img/logow.png";

export const Wrapper = styled.div`
  width: 33.4%;
  height: 70vh;
  ${"" /* background: white; */}
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const RFImg = styled.img`
  width: 70%;
`;

export const RFLogoWhite = () => {
  return <RFImg src={logow} alt="LogoWhite"></RFImg>;
};

export const RFInputText = styled(Input)`
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

const WrapperOu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

export const RFHr = styled.hr`
  width: 132px;
  border: 2px solid #fbfbfb;
  border-radius: 10px;
`;

export const RFOu = () => {
  return (
    <WrapperOu>
      <span>
        <RFHr />
      </span>
      <span>OU</span>
      <span>
        <RFHr />
      </span>
    </WrapperOu>
  );
};

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
