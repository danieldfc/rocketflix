import styled, { css } from "styled-components";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderItem = styled(Slider)`
  ${"" /* height: 122px; */}
  margin-left: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const iconCss = css`
  font-size: 20px;
  background: #ffffff;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const IconRight = styled(RightOutlined)`
  ${iconCss}
`;

export const IconLeft = styled(LeftOutlined)`
  ${iconCss}
`;

export const RFVideoPreview = styled.div`
  width: 300px;
  height: 200px;

  box-shadow: 0px 10px 20px rgba(128, 128, 128, 0.25);
  border-radius: 20px;
`;
