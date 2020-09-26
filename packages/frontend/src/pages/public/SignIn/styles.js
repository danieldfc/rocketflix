import React from 'react';

import styled from 'styled-components';

import logow from '../../../assets/img/logow.png';

export const Wrapper = styled.div`
  width: 33.4%;
  height: 70vh;
  ${'' /* background: white; */}
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const RFImg = styled.img`
  width: 70%;
`;

export const RFLogoWhite = () => {
  return <RFImg src={logow} alt="LogoWhite" />;
};

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
