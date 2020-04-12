import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #624ea5;
  color: #ffffff;
`;

export const WrapperError = styled.div`
  width: 360px;
  height: 70vh;
  ${"" /* background: white; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RFTitleError = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 120px;
  text-align: center;
  line-height: 1px;

  color: #ffffff;
`;

export const RFContentError = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  text-align: center;
  line-height: -24px;

  color: #ffffff;
`;
