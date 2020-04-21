import React from "react";

import styled, { css } from "styled-components";

import { Card } from "antd";

const { Meta } = Card;

const _Card = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-right: 72px;

  .ant-card {
    width: 100%;
    height: 366px;
  }

  .ant-card-body {
    margin-left: 72px;
    width: 1174px;
    height: 366px;
  }

  .ant-card-cover {
    height: 100%;
  }
`;

const _Meta = styled(Meta)`
  width: 1240px;
`;

export const RFCard = () => {
  return (
    <_Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
      loading={true}
    >
      <_Meta title="Europe Street beat" description="www.instagram.com" />
    </_Card>
  );
};
