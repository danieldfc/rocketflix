import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

import colors from '../../styles/colors';

export const Container = styled.div`
  background: var(--white-color);
  border-radius: 10px;
  border: 2px solid var(--white-color);
  padding: 14px 12px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--error-dark-color);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--rocketseat-color);
      border-color: ${shade(0.2, colors.rocketseat)};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--rocketseat-color);
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: var(--gray-color);

    &::placeholder {
      color: var(--gray-light-color);
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
    background: var(--error-dark-color);
    color: var(--white-color);

    &::before {
      border-color: var(--error-dark-color) transparent;
    }
  }
`;
