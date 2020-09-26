import styled from 'styled-components';

import { Input } from 'antd';

const { Search } = Input;

export const RFHeader = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1em;
  border-radius: 3px;
`;

export const RFLogo = styled.img`
  margin-left: 80px;
  width: 320px;

  font-size: 1em;
  border-radius: 3px;
`;

export const RFMenuNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 80px;
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5em;

    color: #7159c1;

    margin: 8px;
  }

  span {
    margin: 8px;
  }
`;

export const RFSearch = styled(Search)`
  width: 32px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5em;
    color: #7159c1;
  }

  span :hover {
    border: none;
    color: #7159c1;
  }

  :hover {
    width: 320px;
    height: 45px;
    border: 1px solid #7159c1;
    box-shadow: 0px 10px 20px rgba(128, 128, 128, 0.25);
    border-radius: 10px;
  }

  .ant-input {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5em;
  }
`;
