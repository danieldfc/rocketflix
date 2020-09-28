import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 14px 12px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #7159c1;
      border-color: ${shade(0.2, '#7159c1')};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #7159c1;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #444;

    &::placeholder {
      color: #666;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
