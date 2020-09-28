import styled from 'styled-components';
import { shade } from 'polished';

import { Link as Anchor } from 'react-router-dom';

export const Container = styled.div`
  max-height: 80px;

  header {
    max-width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 67px;
    }

    nav {
      display: flex;
      align-items: center;

      svg {
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
`;

export const Link = styled(Anchor)`
  color: #7159c1;
  font-weight: bold;
  transition: color 0.2s;

  & + & {
    margin-left: 20px;
  }

  &:hover {
    color: ${shade(0.2, '#7159c1')};
  }
`;
